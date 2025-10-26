/**
 * Career Knowledge Graph - vis.js Configuration
 * Defines visual styling, physics, and interaction settings
 */

const careerGraphConfig = {
    nodes: {
        shape: 'dot',
        size: 22,
        font: {
            size: 11,
            bold: true,
            multi: true,
            vadjust: 0
            // color per-group
        },
        borderWidth: 2,
        borderWidthSelected: 3,
        shadow: {
            enabled: true,
            color: 'rgba(0,0,0,0.2)',
            size: 5,
            x: 2,
            y: 2
        },
        scaling: {
            min: 10,
            max: 40
        }
    },

    edges: {
        width: 2,
        color: {
            color: '#7F8C8D',
            highlight: '#2C3E50',
            hover: '#2C3E50',
            opacity: 0.8
        },
        smooth: {
            enabled: true,
            type: 'continuous',
            roundness: 0.3
        },
        arrows: {
            to: {
                enabled: true,
                type: 'arrow',
                scaleFactor: 0.8
            }
        },
        font: {
            size: 10,
            color: '#555555',
            strokeWidth: 0,
            align: 'middle'
        },
        selectionWidth: 3
    },

    physics: {
        enabled: true,
        stabilization: {
            enabled: true,
            iterations: 200,
            updateInterval: 25,
            fit: true
        },
        barnesHut: {
            gravitationalConstant: -10000,
            centralGravity: 0.25,
            springLength: 150,
            springConstant: 0.03,
            damping: 0.09,
            avoidOverlap: 0.8
        },
        minVelocity: 0.75,
        solver: 'barnesHut',
        timestep: 0.5
    },

    interaction: {
        dragNodes: true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideNodesOnDrag: false,
        hover: true,
        navigationButtons: false,
        selectable: true,
        selectConnectedEdges: true,
        tooltipDelay: 200,
        zoomView: true,
        zoomSpeed: 1
    },

    groups: {
        role: {
            color: {
                background: '#9B59B6',
                border: '#7D3C98',
                highlight: {
                    background: '#9B59B6',
                    border: '#5B2C6F'
                },
                hover: {
                    background: '#AF7AC5',
                    border: '#7D3C98'
                }
            },
            size: 32,
            borderWidth: 3,
            font: { color: '#2C3E50', multi: true, bold: { color: '#ffffff' } }
        },
        project: {
            color: {
                background: '#27AE60',
                border: '#1E8449',
                highlight: {
                    background: '#27AE60',
                    border: '#145A32'
                },
                hover: {
                    background: '#52BE80',
                    border: '#1E8449'
                }
            },
            size: 28,
            borderWidth: 2.5,
            font: { color: '#2C3E50', multi: true, bold: { color: '#ffffff' } }
        },
        domain: {
            color: {
                background: '#F39C12',
                border: '#D68910',
                highlight: {
                    background: '#F39C12',
                    border: '#9A7D0A'
                },
                hover: {
                    background: '#F8C471',
                    border: '#D68910'
                }
            },
            size: 24,
            borderWidth: 2,
            font: { color: '#2C3E50', multi: true }
        },
        skill: {
            color: {
                background: '#3498DB',
                border: '#2874A6',
                highlight: {
                    background: '#3498DB',
                    border: '#1B4F72'
                },
                hover: {
                    background: '#5DADE2',
                    border: '#2874A6'
                }
            },
            size: 22,
            borderWidth: 2,
            font: { color: '#ffffff' }
        },
        education: {
            color: {
                background: '#E74C3C',
                border: '#C0392B',
                highlight: {
                    background: '#E74C3C',
                    border: '#922B21'
                },
                hover: {
                    background: '#EC7063',
                    border: '#C0392B'
                }
            },
            size: 20,
            borderWidth: 1.5,
            font: { color: '#ffffff', multi: true }
        }
    },

    layout: {
        randomSeed: 42,
        improvedLayout: true,
        hierarchical: {
            enabled: false
        }
    }
};
