module objects {
    
    // Reel object to hold the different reel images
    export class Reel extends objects.GameObject 
    {

        // constructor
        constructor(imageString:string) {
            super(imageString);
            this.Start();
        }

        // public methods
        public Start(): void {
            this.y = 180;
        } 

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
        }


    }
}