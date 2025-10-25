/**
 * Career Knowledge Graph - Initialization
 * Creates and manages vis.js network instances
 */

// Store network instances globally for potential external access
const careerGraphNetworks = {};

/**
 * Initialize a career graph visualization in the specified container
 * @param {string} containerId - DOM element ID for the graph container
 * @returns {vis.Network|null} - Network instance or null if container not found
 */
function initCareerGraph(containerId) {
    const container = document.getElementById(containerId);

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

        // Store network instance
        careerGraphNetworks[containerId] = network;

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

    // Initialize both language versions
    initCareerGraph('career-graph-pl');
    initCareerGraph('career-graph-en');

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
