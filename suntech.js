/**
* @description MeshCentral Suntech Plugin
* @author Surprise
* @license Apache-2.0
* @version v0.0.1
*/

module.exports = function (parent) {
    const obj = {};
    obj.parent = parent;

    obj.hook_agentCoreIsStable = function (node, agent) {
        console.log(`[Suntech Plugin] Agent connected: ${node.name}`);

    };

    return obj;
};
