// This .js file is auto-generated by `createCesium()` from VeRoViz
// The configs for cesium application go to here

function setConfigs() {
    viewer.camera.flyTo({
        destination: Cesium.Rectangle.fromDegrees(-122.338220, 30.189900, -71.475780, 47.617050) 
    });
    viewer.clock.currentTime = Cesium.JulianDate.addSeconds('2024-04-22T08:00:00Z', 0, new Cesium.JulianDate());
    allIDs = [
        'o-Boston-/veroviz/models/ub_truck.gltf-stationary', 
        'o-Chicago-/veroviz/models/ub_truck.gltf-stationary', 
        'o-LA-/veroviz/models/ub_truck.gltf-stationary', 
        'o-Seattle-/veroviz/models/ub_truck.gltf-stationary', 
        'o-Austin-/veroviz/models/ub_truck.gltf-stationary', 
        'o-Austin-/veroviz/models/drone.gltf-stationary', 
        'o-Seattle-/veroviz/models/drone.gltf-stationary', 
        'o-Chicago-/veroviz/models/drone.gltf-stationary', 
        'o-Boston-/veroviz/models/drone.gltf-stationary', 
        'o-LA-/veroviz/models/drone.gltf-stationary', 
        'o-Austin-/veroviz/models/drone.gltf-move', 
        'o-Austin-/veroviz/models/ub_truck.gltf-move', 
        'o-Boston-/veroviz/models/drone.gltf-move', 
        'o-Boston-/veroviz/models/ub_truck.gltf-move', 
        'o-Chicago-/veroviz/models/drone.gltf-move', 
        'o-Chicago-/veroviz/models/ub_truck.gltf-move', 
        'o-LA-/veroviz/models/drone.gltf-move', 
        'o-LA-/veroviz/models/ub_truck.gltf-move', 
        'o-Seattle-/veroviz/models/drone.gltf-move', 
        'o-Seattle-/veroviz/models/ub_truck.gltf-move'    
    ];
    orientationIDs = [
        'o-Austin-/veroviz/models/drone.gltf-move', 
        'o-Austin-/veroviz/models/ub_truck.gltf-move', 
        'o-Boston-/veroviz/models/drone.gltf-move', 
        'o-Boston-/veroviz/models/ub_truck.gltf-move', 
        'o-Chicago-/veroviz/models/drone.gltf-move', 
        'o-Chicago-/veroviz/models/ub_truck.gltf-move', 
        'o-LA-/veroviz/models/drone.gltf-move', 
        'o-LA-/veroviz/models/ub_truck.gltf-move', 
        'o-Seattle-/veroviz/models/drone.gltf-move', 
        'o-Seattle-/veroviz/models/ub_truck.gltf-move'    
    ];
    czmlRouteFile = '/veroviz/optimized/routes.czml';
    runRoutes(czmlRouteFile, allIDs, orientationIDs);
objectInfo['Boston-/veroviz/models/ub_truck.gltf'] = {
    label : 'Boston (/veroviz/models/ub_truck.gltf)', 
    childModels : ['o-Boston-/veroviz/models/ub_truck.gltf-stationary', 'o-Boston-/veroviz/models/ub_truck.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Boston-/veroviz/models/drone.gltf'] = {
    label : 'Boston (/veroviz/models/drone.gltf)', 
    childModels : ['o-Boston-/veroviz/models/drone.gltf-stationary', 'o-Boston-/veroviz/models/drone.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Chicago-/veroviz/models/ub_truck.gltf'] = {
    label : 'Chicago (/veroviz/models/ub_truck.gltf)', 
    childModels : ['o-Chicago-/veroviz/models/ub_truck.gltf-stationary', 'o-Chicago-/veroviz/models/ub_truck.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Chicago-/veroviz/models/drone.gltf'] = {
    label : 'Chicago (/veroviz/models/drone.gltf)', 
    childModels : ['o-Chicago-/veroviz/models/drone.gltf-stationary', 'o-Chicago-/veroviz/models/drone.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['LA-/veroviz/models/ub_truck.gltf'] = {
    label : 'LA (/veroviz/models/ub_truck.gltf)', 
    childModels : ['o-LA-/veroviz/models/ub_truck.gltf-stationary', 'o-LA-/veroviz/models/ub_truck.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['LA-/veroviz/models/drone.gltf'] = {
    label : 'LA (/veroviz/models/drone.gltf)', 
    childModels : ['o-LA-/veroviz/models/drone.gltf-stationary', 'o-LA-/veroviz/models/drone.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Seattle-/veroviz/models/ub_truck.gltf'] = {
    label : 'Seattle (/veroviz/models/ub_truck.gltf)', 
    childModels : ['o-Seattle-/veroviz/models/ub_truck.gltf-stationary', 'o-Seattle-/veroviz/models/ub_truck.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Seattle-/veroviz/models/drone.gltf'] = {
    label : 'Seattle (/veroviz/models/drone.gltf)', 
    childModels : ['o-Seattle-/veroviz/models/drone.gltf-stationary', 'o-Seattle-/veroviz/models/drone.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Austin-/veroviz/models/ub_truck.gltf'] = {
    label : 'Austin (/veroviz/models/ub_truck.gltf)', 
    childModels : ['o-Austin-/veroviz/models/ub_truck.gltf-stationary', 'o-Austin-/veroviz/models/ub_truck.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
objectInfo['Austin-/veroviz/models/drone.gltf'] = {
    label : 'Austin (/veroviz/models/drone.gltf)', 
    childModels : ['o-Austin-/veroviz/models/drone.gltf-stationary', 'o-Austin-/veroviz/models/drone.gltf-move'],
    scale : 100, 
    minPxSize : 75 
}; 
    registerObjects(objectInfo); 
}