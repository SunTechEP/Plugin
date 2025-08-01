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

        // Send a message to the Event Console for this node
        parent.parent.DispatchEvent([
            node._id
        ], obj, "event", {
            msg: "Suntech plugin triggered: Agent core is stable",
            eventid: 1
        });
    };

    return obj;
};
