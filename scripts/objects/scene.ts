module objects{

    // Abstract class for the different scenes
    export abstract class Scene extends createjs.Container{

        // Constructor

        constructor() {
            super();
        }

        // Public methods
        public abstract Main():void;

        public abstract Start():void;

        public abstract Update():void;

        public abstract Reset():void;

        public Destroy():void 
        {
            this.removeAllEventListeners;
            this.removeAllChildren;
        }


    }
}