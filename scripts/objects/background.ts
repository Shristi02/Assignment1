module objects{
    // Background class used for the game background
    export class Background extends objects.GameObject{
        
        /**
         *Creates an instance of Background.
         * @param {string} imageString
         * @memberof Background
         */

        // constructor

        constructor(imageString:string) {
            super(imageString);
        }

        // public methods

        public Start(): void {
        }

        public Update(): void {
        }

        public Reset(): void {
        }
        
        public Destroy(): void {

        }
    }
}