const dbManagerInstance = {
    version: "1.0.276",
    registry: [335, 1236, 1916, 1158, 1171, 1186, 1827, 40],
    init: function() {
        const nodes = this.registry.filter(x => x > 396);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dbManagerInstance.init();
});