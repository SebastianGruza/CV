/**
 * Career Knowledge Graph - Initialization
 * Creates and manages vis.js network instances
 */

// Store network instances globally for potential external access
const careerGraphNetworks = {};
const careerGraphPhysicsState = {};

/**
 * Initialize a career graph visualization in the specified container
 * @param {string} containerId - DOM element ID for the graph container
 * @param {string} toggleButtonId - DOM element ID for the physics toggle button
 * @returns {vis.Network|null} - Network instance or null if container not found
 */
function initCareerGraph(containerId, toggleButtonId) {
    const container = document.getElementById(containerId);
    const toggleButton = document.getElementById(toggleButtonId);

    if (!container) {
        console.warn(`Career Graph: Container "${containerId}" not found`);
        return null;
    }

    try {
        // Create vis.js DataSets from our data
        const data = {
            nodes: new vis.DataSet(careerGraphData.nodes),
            edges: new vis.DataSet(careerGraphData.edges)
        };

        // Create the network
        const network = new vis.Network(container, data, careerGraphConfig);

        // Store network instance and physics state
        careerGraphNetworks[containerId] = network;
        careerGraphPhysicsState[containerId] = true; // Physics enabled by default

        // Event listeners for better UX
        network.on('stabilizationProgress', function(params) {
            const progress = Math.round((params.iterations / params.total) * 100);
            if (progress % 20 === 0) { // Log every 20%
                console.log(`Career Graph (${containerId}): Stabilization ${progress}%`);
            }
        });

        network.on('stabilizationIterationsDone', function() {
            console.log(`Career Graph (${containerId}): Stabilization complete`);
        });

        // Optional: Log node clicks for debugging
        network.on('click', function(params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                const node = data.nodes.get(nodeId);
                console.log('Clicked node:', node.label, '|', node.title);
            }
        });

        // Optional: Highlight connected nodes on hover
        network.on('hoverNode', function(params) {
            const nodeId = params.node;
            const connectedNodes = network.getConnectedNodes(nodeId);
            const connectedEdges = network.getConnectedEdges(nodeId);

            // You can add custom highlighting here if needed
            // For now, vis.js handles hover highlighting via config
        });

        // Setup physics toggle button if provided
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                const currentState = careerGraphPhysicsState[containerId];
                const newState = !currentState;

                // Toggle physics
                network.setOptions({ physics: { enabled: newState } });
                careerGraphPhysicsState[containerId] = newState;

                // Update button text and style
                if (newState) {
                    toggleButton.textContent = toggleButton.id.includes('-en')
                        ? '⏸️ Disable physics'
                        : '⏸️ Wyłącz fizykę';
                    toggleButton.classList.remove('disabled');
                } else {
                    toggleButton.textContent = toggleButton.id.includes('-en')
                        ? '▶️ Enable physics'
                        : '▶️ Włącz fizykę';
                    toggleButton.classList.add('disabled');
                }

                console.log(`Career Graph (${containerId}): Physics ${newState ? 'enabled' : 'disabled'}`);
            });
        }

        console.log(`Career Graph (${containerId}): Initialized successfully`);
        return network;

    } catch (error) {
        console.error(`Career Graph (${containerId}): Initialization failed`, error);
        return null;
    }
}

/**
 * Initialize all career graphs when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Career Graph: Initializing visualizations...');

    // Initialize both language versions with physics toggle buttons
    initCareerGraph('career-graph-pl', 'toggle-physics-pl');
    initCareerGraph('career-graph-en', 'toggle-physics-en');

    console.log('Career Graph: All visualizations initialized');
});

/**
 * Optional: Reset graph to initial state
 * @param {string} containerId - Graph container ID to reset
 */
function resetCareerGraph(containerId) {
    const network = careerGraphNetworks[containerId];
    if (network) {
        network.fit({
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });
        console.log(`Career Graph (${containerId}): Reset to initial view`);
    }
}

/**
 * Optional: Export graph as image (vis.js feature)
 * @param {string} containerId - Graph container ID to export
 */
function exportCareerGraphImage(containerId) {
    const network = careerGraphNetworks[containerId];
    if (network) {
        const canvas = network.canvas.frame.canvas;
        const dataURL = canvas.toDataURL('image/png');

        // Create download link
        const link = document.createElement('a');
        link.download = `career-graph-${containerId}.png`;
        link.href = dataURL;
        link.click();

        console.log(`Career Graph (${containerId}): Exported as image`);
    }
}
