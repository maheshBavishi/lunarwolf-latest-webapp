import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from "react";
import styles from "./profitSharing.module.scss";
import {
  ReactFlow,
  useEdgesState,
  MarkerType,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Image from "next/image";
import SmoothElbowEdge from "./SmoothElbowEdge";
import WolfLogo from "@/assets/images/logo.svg";
import LeverCard from "./LeverCard";

// Custom hook to get live screen dimensions
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth ?? 1280,
    height: window.innerHeight ?? 800,
  });

  useEffect(() => {

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

// Context for unlock progress to avoid ReactFlow re-renders
const UnlockProgressContext = createContext({
  1.1: 1,
  1.2: 0,
  1.3: 0,
  1.4: 0,
  1.5: 0,
});

const useUnlockProgress = () => useContext(UnlockProgressContext);

// Commission levels data
const commissionLevels = [
  {
    level: "1.1",
    title: "ALPHA WOLF",
    commission: "5",
    isLocked: false,
    lockDescription: "",
    lockPrice: "",
    unlockRequirement: "",
  },
  {
    level: "1.2",
    title: "BETA WOLF",
    commission: "2.5",
    isLocked: true,
    lockDescription: "",
    lockPrice: "25000",
    unlockRequirement: "Complete Direct Business 25000$ Then Open Lv1.2",
  },
  {
    level: "1.3",
    title: "HUNTER WOLF",
    commission: "2",
    isLocked: true,
    lockDescription: "",
    lockPrice: "50000",
    unlockRequirement: "Complete Direct Business 50000$ Then Open LVL 3",
  },
  {
    level: "1.4",
    title: "SCOUT WOLF",
    commission: "1.5",
    isLocked: true,
    lockDescription: "Add Additional Bonus 1 $ Fore Direct 6+1=7%",
    lockPrice: "100000",
    unlockRequirement: "Complete Direct Business 100000$ Then Open LVL 4",
  },
  {
    level: "1.5",
    title: "DIRE WOLF",
    commission: "1",
    isLocked: true,
    lockDescription: "Add Additional Bonus 1 $ Fore Direct 7+1=8%",
    lockPrice: "200000",
    unlockRequirement: "Complete Direct Business 200000$ Then Open LVL 5",
  },
];

// Custom Node Components
const YouNode = () => (
  <div className={styles.youNodeContainer}>
    <div
      className={styles.youNodeCircle}
      style={{
        width: "clamp(56px, 12vw, 84px)",
        height: "clamp(56px, 12vw, 84px)",
        minWidth: "56px",
        minHeight: "56px",
        maxWidth: "84px",
        maxHeight: "84px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        position: "relative",
      }}
    >
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{
          background: "#53B1D9",
          border: "none",
          position: "absolute",
          left: "50%",
          bottom: "-8px",
          transform: "translateX(-50%)",
          width: "clamp(4px, 1vw, 8px)",
          height: "clamp(4px, 1vw, 8px)",
        }}
      />
      <span className={styles.youNodeText}>You</span>
    </div>
    <Image
      className={styles.youNodeLogo}
      src={WolfLogo}
      alt="Lunar wolf"
    />
  </div>
);

const LevelNode = ({ data, levelRefs }) => {
  const unlockProgress = useUnlockProgress();

  return (
    <div
      ref={(el) => {
        if (el) {
          levelRefs.current[data.level] = el;
        }
      }}
      data-level={data.level}
      className={styles.levelNodeWrapper}
      style={{
        position: "relative",
        width:
          window.innerWidth < 430
            ? "94vw"
            : window.innerWidth < 640
              ? "97vw"
              : window.innerWidth < 768
                ? "80vw"
                : window.innerWidth < 1024
                  ? "70vw"
                  : "55vw",
        maxWidth: "100%",
      }}
    >
      {/* Card container with handles positioned relative to the card */}
      <div style={{ position: "relative" }}>
        {/* Add a new top-left handle for level 1.1 */}
        {data.level === "1.1" && (
          <Handle
            type="target"
            position={Position.Top}
            id="top-left"
            style={{
              background: "#53B1D9",
              border: "none",
              left: "clamp(30px, 7vw, 70px)",
              top: "-13px",
              position: "absolute",
              transform: "translateY(-50%) translateX(-50%)",
              width: "clamp(4px, 1vw, 8px)",
              height: "clamp(4px, 1vw, 8px)",
              zIndex: 1,
            }}
          />
        )}

        {/* Keep the original top handle for other levels */}
        {data.level !== "1.1" && (
          <Handle
            type="target"
            position={Position.Top}
            id="top"
            style={{
              background: "#53B1D9",
              border: "none",
              left: "50%",
              top: "-4px",
              position: "absolute",
              transform: "translateY(-50%) translateX(-50%)",
              width: "clamp(4px, 1vw, 8px)",
              height: "clamp(4px, 1vw, 8px)",
              zIndex: 1,
            }}
          />
        )}

        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom"
          style={{
            background: "transparent",
            border: "none",
            left: "50%",
            bottom: "-4px",
            position: "absolute",
            transform: "translateY(50%) translateX(-50%)",
            width: "clamp(4px, 1vw, 8px)",
            height: "clamp(4px, 1vw, 8px)",
            zIndex: 1,
          }}
        />

        {/* Multiple right handles for Level 1 bonus arrows - well separated */}
        {data.level === "1.1" && (
          <>
            <Handle
              type="source"
              position={Position.Right}
              id="right-bonus1"
              style={{
                background: "#53B1D9",
                right: "-4px",
                top: "30%",
                position: "absolute",
                transform: "translateY(-50%) translateX(50%)",
                border: "none",
                width: "clamp(4px, 1vw, 8px)",
                height: "clamp(4px, 1vw, 8px)",
                zIndex: 1,
              }}
            />
            <Handle
              type="source"
              position={Position.Right}
              id="right-bonus2"
              style={{
                background: "#53B1D9",
                right: "-4px",
                top: "50%",
                position: "absolute",
                transform: "translateY(-50%) translateX(50%)",
                border: "none",
                width: "clamp(4px, 1vw, 8px)",
                height: "clamp(4px, 1vw, 8px)",
                zIndex: 1,
              }}
            />
            <Handle
              type="source"
              position={Position.Right}
              id="right-bonus3"
              style={{
                background: "#53B1D9",
                right: "-4px",
                top: "70%",
                position: "absolute",
                transform: "translateY(-50%) translateX(50%)",
                border: "none",
                width: "clamp(4px, 1vw, 8px)",
                height: "clamp(4px, 1vw, 8px)",
                zIndex: 1,
              }}
            />
          </>
        )}

        {(data.level === "1.2" ||
          data.level === "1.3" ||
          data.level === "1.4" ||
          data.level === "1.5") && (
            <Handle
              type="target"
              position={Position.Right}
              id="right-target"
              style={{
                background: "transparent",
                right: "-4px",
                top: "50%",
                position: "absolute",
                transform: "translateY(-50%) translateX(50%)",
                border: "none",
                width: "clamp(4px, 1vw, 8px)",
                height: "clamp(4px, 1vw, 8px)",
                zIndex: 1,
              }}
            />
          )}

        <LeverCard
          commission={data.commission}
          level={data.level}
          title={data.title}
          isLocked={data.isLocked}
          lockDescription={data.lockDescription}
          lockPrice={data.lockPrice}
          unlockProgress={unlockProgress[data.level] || 0}
        />
      </div>
    </div>
  );
};

const generateWolfLogoConnections = (levelId) => {
  const alphabets = ["A", "B", "C", "D", "E", "F", "G"];
  const connections = [];

  for (let i = 0; i < alphabets.length - 1; i++) {
    const current = alphabets[i];
    const next = alphabets[i + 1];

    connections.push({
      id: `${levelId}-${current}-image-to-${next}-image`,
      source: levelId,
      target: levelId,
      sourceHandle: `${current}-image-source`,
      targetHandle: `${next}-image-target`,
      type: "default",
      style: {
        stroke: "#53B1D9",
        strokeWidth:
          window.innerWidth < 640 ? 1 : 2,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#53B1D9",
        width: 0,
        height: 0,
      },
    });
  }

  return connections;
};

const generateLetterAConnectionsBetweenLevels = () => {
  const levels = [
    "level-1.1",
    "level-1.2",
    "level-1.3",
    "level-1.4",
    "level-1.5",
  ];
  const connections = [];

  for (let i = 0; i < levels.length - 1; i++) {
    const currentLevel = levels[i];
    const nextLevel = levels[i + 1];

    connections.push({
      id: `${currentLevel}-A-to-${nextLevel}-center`,
      source: currentLevel,
      target: nextLevel,
      sourceHandle: `A-to-next-level`,
      targetHandle: `top`,
      type: "smoothstep",
      data: {
        offset: 0,
      },
      style: {
        stroke: "#53B1D9",
        strokeWidth: window.innerWidth < 640 ? 1 : 2,
      },
    });
  }

  return connections;
};

const ProfitSharing = () => {
  const { width: screenWidth, height: screenHeight } = useScreenSize();
  console.log(screenWidth, "screenWidthscreenWidthscreenWidth")
  const getResponsiveLayout = (w) => {
    if (!w) w = 1280;

    if (w < 430) {
      return {
        nodeWidth: w - 40,
        levelSpacing: 190,
        youNodeY: 0,
        levelStartY: 150,
        centerX: w * 0.5,
      };
    }

    if (w < 640) {
      return {
        nodeWidth: w - 60,
        levelSpacing: 170,
        youNodeY: 5,
        levelStartY: 120,
        centerX: w * 0.42,
      };
    }

    if (w < 768) {
      return {
        nodeWidth: w * 0.85,
        levelSpacing: 210,
        youNodeY: 15,
        levelStartY: 140,
        centerX: w * 0.32,
      };
    }

    if (w < 1024) {
      return {
        nodeWidth: w * 0.75,
        levelSpacing: 260,
        youNodeY: 20,
        levelStartY: 160,
        centerX: w * 0.4,
      };
    }
    if (w < 1380) {
      return {
        nodeWidth: w * 0.75,
        levelSpacing: 260,
        youNodeY: 20,
        levelStartY: 160,
        centerX: w * 0.4,
      };
    }

    return {
      nodeWidth: w * 0.55,
      levelSpacing: 320,
      youNodeY: 30,
      levelStartY: 200,
      centerX: w * 0.4,
    };
  };

  const [layout, setLayout] = useState(() => getResponsiveLayout(screenWidth));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const prevScreenSize = useRef({ width: screenWidth, height: screenHeight });
  const [forceRefreshKey, setForceRefreshKey] = useState(0);

  const getCurrentBreakpoint = (width) => {
    if (width < 480) return "xs";
    if (width < 640) return "sm";
    if (width < 768) return "md";
    if (width < 1024) return "lg";
    return "xl";
  };

  const [unlockProgress, setUnlockProgress] = useState({
    1.1: 1,
    1.2: 0,
    1.3: 0,
    1.4: 0,
    1.5: 0,
  });

  const containerRef = useRef(null);
  const levelRefs = useRef({});
  const observerRef = useRef(null);

  const nodeTypes = useMemo(
    () => ({
      youNode: YouNode,
      levelNode: (props) => <LevelNode {...props} levelRefs={levelRefs} />,
    }),
    [],
  );

  const calculateUnlockProgress = useCallback((entries) => {
    const newProgress = { 1.1: 1 };

    entries.forEach((entry) => {
      const levelId = entry.target.getAttribute("data-level");
      if (!levelId || levelId === "1.1") return;

      const { intersectionRatio, boundingClientRect, rootBounds } = entry;

      if (!rootBounds) return;

      const cardHeight = boundingClientRect.height;
      const visibleHeight = Math.min(
        boundingClientRect.bottom - rootBounds.top,
        rootBounds.bottom - boundingClientRect.top,
        cardHeight,
      );

      const visibilityRatio = Math.max(0, visibleHeight / cardHeight);

      // Use a sophisticated easing function for smooth unlock animation
      let progress = 0;
      if (visibilityRatio > 0.3) {
        // Start unlocking when 30% visible
        const adjustedRatio = (visibilityRatio - 0.3) / 0.7; // Normalize to 0-1
        // Smooth easing with slight overshoot for premium feel
        progress = Math.min(
          1,
          Math.pow(adjustedRatio, 0.6) *
          (1 + 0.1 * Math.sin(adjustedRatio * Math.PI)),
        );
      }

      newProgress[levelId] = progress;
    });

    // Update state only if there are meaningful changes
    setUnlockProgress((prev) => {
      const hasChanges = Object.keys(newProgress).some(
        (key) => Math.abs(newProgress[key] - prev[key]) > 0.01,
      );
      return hasChanges ? { ...prev, ...newProgress } : prev;
    });
  }, []);

  // Setup Intersection Observer for viewport-based unlocking
  useEffect(() => {
    if (!containerRef.current) return;

    // Create observer with optimized settings
    observerRef.current = new IntersectionObserver(calculateUnlockProgress, {
      root: null, // Use viewport as root
      rootMargin: "0px 0px -10% 0px", // Trigger when card is 10% from bottom of viewport
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for smooth animation
    });

    // Observe all level cards
    commissionLevels.forEach((level) => {
      const element = levelRefs.current[level.level];
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [calculateUnlockProgress, commissionLevels]);

  // Optimized resize handling - update on breakpoint changes or significant size changes
  useEffect(() => {
    if (!isClient) return;

    const currentBreakpoint = getCurrentBreakpoint(screenWidth);
    const prevBreakpoint = getCurrentBreakpoint(prevScreenSize.current.width);

    const hasBreakpointChange = currentBreakpoint !== prevBreakpoint;
    const hasSignificantSizeChange =
      Math.abs(screenWidth - prevScreenSize.current.width) > 100 ||
      Math.abs(screenHeight - prevScreenSize.current.height) > 100;

    if (hasBreakpointChange || hasSignificantSizeChange) {
      // Update all layout calculations
      const newLayout = getResponsiveLayout(screenWidth);

      // Update layout immediately
      setLayout(newLayout);
      setDynamicHeight(getDynamicHeight());
      setViewport(calculateInitialViewport());

      // Force ReactFlow refresh with a more aggressive approach
      const timestamp = Date.now();
      setForceRefreshKey(timestamp);

      // Additional forced refresh after a short delay to ensure ReactFlow picks up changes
      setTimeout(() => {
        setForceRefreshKey(timestamp + 1);
      }, 100);

      // Update previous size reference
      prevScreenSize.current = { width: screenWidth, height: screenHeight };
    }
  }, [screenWidth, screenHeight, isClient]);

  // Completely static nodes - never update, unlock progress handled by LeverCard internally
  const staticNodes = useMemo(() => {
    return [
      {
        id: "you",
        type: "youNode",
        position: { x: layout.centerX * 0.85, y: layout.youNodeY },
        data: {},
      },
      ...commissionLevels.map((level, index) => ({
        id: `level-${level.level}`,
        type: "levelNode",
        position: {
          x: layout.centerX - layout.nodeWidth / 2,
          y: layout.levelStartY + index * layout.levelSpacing,
        },
        data: {
          ...level,
          unlockProgress: 0, // Static, will be updated via context or ref
        },
      })),
      // Intermediate routing nodes - responsive positioning
      {
        id: "route1",
        type: "default",
        position: {
          x: layout.centerX + layout.nodeWidth + 50,
          y: layout.levelStartY + 1 * layout.levelSpacing,
        },
        data: { label: "" },
        style: { opacity: 0, width: 1, height: 1 },
      },
      {
        id: "route2",
        type: "default",
        position: {
          x: layout.centerX + layout.nodeWidth + 80,
          y: layout.levelStartY + 2 * layout.levelSpacing,
        },
        data: { label: "" },
        style: { opacity: 0, width: 1, height: 1 },
      },
      {
        id: "route3",
        type: "default",
        position: {
          x: layout.centerX + layout.nodeWidth + 110,
          y: layout.levelStartY + 3 * layout.levelSpacing,
        },
        data: { label: "" },
        style: { opacity: 0, width: 1, height: 1 },
      },
    ];
  }, [
    layout.centerX,
    layout.nodeWidth,
    layout.youNodeY,
    layout.levelStartY,
    layout.levelSpacing,
  ]);

  // Calculate dynamic height based on content and live screen dimensions
  const getDynamicHeight = useCallback(() => {

    // Fixed height for mobile view
    if (screenWidth < 768) {
      return 800;
    }

    // Use live screen dimensions for desktop
    return Math.max(
      // Minimal bottom padding
      layout.levelStartY + commissionLevels.length * layout.levelSpacing + 100,
      screenHeight - 100,
    );
  }, [layout.levelStartY, layout.levelSpacing, screenHeight, screenWidth]);

  const [dynamicHeight, setDynamicHeight] = useState(() => getDynamicHeight());

  const calculateInitialViewport = () => {
    if (screenWidth < 430) return { x: 0, y: 0, zoom: 0.72 };
    if (screenWidth < 640) return { x: 0, y: 0, zoom: 0.82 };
    if (screenWidth < 768) return { x: 0, y: 0, zoom: 0.92 };
    if (screenWidth < 1024) return { x: 0, y: 0, zoom: 1.0 };
    return { x: 0, y: 0, zoom: 1.1 };
  };

  const [viewport, setViewport] = useState(calculateInitialViewport);

  // Initial edges with responsive values - updates with screen size
  const initialEdges = useMemo(
    () => [
      {
        id: "you-to-level1",
        source: "you",
        target: "level-1.1",
        sourceHandle: "bottom",
        targetHandle: "top-left",
        type: "smoothstep",
        data: {
          offset: 0,
        },
        style: {
          stroke: "#53B1D9",
          strokeWidth: 2,
        },
      },
      // Bonus arrows with responsive styling
      {
        id: "bonus1",
        source: "level-1.1",
        target: "level-1.3",
        sourceHandle: "right-bonus3",
        targetHandle: "right-target",
        type: "smoothstep",
        data: {
          offset:
            screenWidth < 480
              ? 25
              : screenWidth < 640
                ? 30
                : screenWidth < 1024
                  ? 45
                  : 100,
        },
        style: {
          stroke: "#53B1D9",
          strokeWidth: 3,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#53B1D9",
          width: 8,
          height: 8,
        },
        label: "BONUS 1: DIRECT COMMISSION INCREASED TO 6%",
        labelStyle: {
          fill: "#FDD835",
          fontWeight: "bold",
          fontSize: "clamp(8px, 2vw, 11px)",
          textAnchor: "middle",
          dominantBaseline: "middle",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        },
        labelBgStyle: {
          fill: "#03141D",
          stroke: "#53B1D9",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        labelBgPadding: [15, 10],
        labelBgBorderRadius: 18,
        labelShowBg: true,
      },

      {
        id: "bonus2",
        source: "level-1.1",
        target: "level-1.4",
        sourceHandle: "right-bonus2",
        targetHandle: "right-target",
        type: "smoothstep",
        data: {
          offset:
            screenWidth < 480
              ? 35
              : screenWidth < 640
                ? 45
                : screenWidth < 1024
                  ? 75
                  : 150,
        },
        style: {
          stroke: "#53B1D9",
          strokeWidth: 3,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#53B1D9",
          width: 8,
          height: 8,
        },
        label: "BONUS 2: DIRECT COMMISSION INCREASED TO 7%",
        labelStyle: {
          fill: "#FDD835",
          fontWeight: "bold",
          fontSize: "clamp(8px, 2vw, 11px)",
          textAnchor: "middle",
          dominantBaseline: "middle",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        },
        labelBgStyle: {
          fill: "#03141D",
          stroke: "#53B1D9",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        labelBgPadding: [15, 10],
        labelBgBorderRadius: 18,
        labelShowBg: true,
      },

      {
        id: "bonus3",
        source: "level-1.1",
        sourceHandle: "right-bonus1",
        target: "level-1.5",
        targetHandle: "right-target",
        type: "smoothstep",
        data: {
          offset:
            screenWidth < 480
              ? 50
              : screenWidth < 640
                ? 65
                : screenWidth < 1024
                  ? 110
                  : 200,
        },
        style: {
          stroke: "#53B1D9",
          strokeWidth: 3,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#53B1D9",
          width: 8,
          height: 8,
        },
        label: "BONUS 3: DIRECT COMMISSION INCREASED TO 8%",
        labelStyle: {
          fill: "#FDD835",
          fontWeight: "bold",
          fontSize: "clamp(8px, 2vw, 11px)",
          textAnchor: "middle",
          dominantBaseline: "middle",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        },
        labelBgStyle: {
          fill: "#03141D",
          stroke: "#53B1D9",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        labelBgPadding: [15, 10],
        labelBgBorderRadius: 18,
        labelShowBg: true,
      },

      // Wolf logo connections for each level
      ...generateWolfLogoConnections("level-1.1"),
      ...generateWolfLogoConnections("level-1.2"),
      ...generateWolfLogoConnections("level-1.3"),
      ...generateWolfLogoConnections("level-1.4"),
      ...generateWolfLogoConnections("level-1.5"),

      // Letter A connections between levels
      ...generateLetterAConnectionsBetweenLevels(),
    ],
    [screenWidth],
  );

  // Edges with responsive offsets - updates with screen size
  const [edges, setEdges] = useEdgesState(initialEdges);

  // Update edges when screen size changes
  useEffect(() => {
    setEdges(initialEdges);
  }, [initialEdges, setEdges]);

  return (
    <div className={styles.profitSharing}>
      <div className={styles.title}>
        <h2>Profit Sharing</h2>
        <p>Visualize your earnings at each level with detailed commission percentages. This chart clearly shows how profits flow from direct referrals (5%) down to the fifth level (1%). Understand your earning potential and track rewards easily across all levels.</p>
      </div>

      <div ref={containerRef} className={styles.flowContainer}>
        <div
          style={{
            height: `${dynamicHeight}px`,
          }}
          className={styles.flowWrapper}
        >
          <UnlockProgressContext.Provider value={unlockProgress}>
            <ReactFlow
              key={`reactflow-${forceRefreshKey}-${getCurrentBreakpoint(
                screenWidth,
              )}`}
              nodes={staticNodes}
              edges={edges}
              onNodesChange={() => { }}
              onEdgesChange={() => { }}
              onConnect={() => { }}
              nodeTypes={nodeTypes}
              edgeTypes={{
                smoothstep: SmoothElbowEdge,
              }}
              fitView={false}
              attributionPosition="bottom-left"
              proOptions={{ hideAttribution: true }}
              className={styles.reactFlow}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnDrag={true}
              zoomOnScroll={true}
              zoomOnPinch={true}
              zoomOnDoubleClick={true}
              panOnScroll={true}
              panOnScrollSpeed={1}
              viewport={viewport}
              onViewportChange={setViewport}
              connectionLineStyle={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
              preventScrolling={false}
              minZoom={0.5}
              maxZoom={2}
              snapToGrid={false}
              snapGrid={[15, 15]}
              selectNodesOnDrag={false}
              deleteKeyCode={null}
              multiSelectionKeyCode={null}
              selectionKeyCode={null}
              panActivationKeyCode={null}
              zoomActivationKeyCode={null}
            />
          </UnlockProgressContext.Provider>
        </div>
      </div>

    </div >
  );
};

export default ProfitSharing;