window.addEventListener('DOMContentLoaded', function() {
    
    const grid = new Muuri('.grid', {
        dragEnabled: true,
        dragContainer: document.body,
        dragStartPredicate: {
            distance: 220,
            delay: 0
        },
        dragAxis: 'xy',
        dragSort: true,
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'

    });

    function create3DBox(canvasId, modelName) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return; // Safety check

        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        BABYLON.SceneLoader.ImportMesh("", "https://models.babylonjs.com/", modelName, scene, function() {
            scene.createDefaultCameraOrLight(true, true, true);
        });

        engine.runRenderLoop(() => scene.render());

        window.addEventListener("resize", () => engine.resize());
    }

    create3DBox("clothCanvas", "clothFolds.glb");
    create3DBox("planeCanvas", "aerobatic_plane.glb");
    create3DBox("houseCanvas", "haunted_house.glb");
    create3DBox("seagulCanvas", "seagulf.glb");
    create3DBox("heartCanvas", "emoji_heart.glb");
    create3DBox("dummyCanvas", "dummy3.babylon");
    create3DBox("fishCanvas", "fish.glb");
    create3DBox("logoCanvas", "babylonJS_logo_v3.babylon");
    create3DBox("skullCanvas", "Skull/skull.babylon");
    create3DBox("toasterCanvas", "toast_acrobatics.glb");
    create3DBox("helmetCanvas", "flightHelmet.glb");
    create3DBox("ufoCanvas", "ufo.glb");
});