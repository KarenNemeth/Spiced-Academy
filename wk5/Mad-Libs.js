(function(){

    var readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var rj = [];

    rl.question("Give me a plural noun!", (answer)=>{
        rj.push(answer);
        rl.question("Now a place!", (answer)=>{
            rj.push(answer);
            rl.question("Now a singular noun!", (answer)=>{
                rj.push(answer);
                rl.question("Now another plural noun!", (answer)=>{
                    rj.push(answer);
                    rl.question("Now another singular noun!", (answer)=>{
                        rj.push(answer);
                        rl.question("Now an adjective!", (answer)=>{
                            rj.push(answer);
                            rl.question("Now a verb!", (answer)=>{
                                rj.push(answer);
                                rl.question("Now a number!", (answer)=>{
                                    rj.push(answer);
                                    rl.question("Now another adjective!", (answer)=>{
                                        rj.push(answer);
                                        rl.question("Now a body part!", (answer)=>{
                                            rj.push(answer);
                                            rl.question("And finally, a verb!", (answer)=>{
                                                rj.push(answer);
                                                rl.close();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    rl.on('close', (poem) =>{
        console.log("Two " + rj[0] + ", both alike in dignity,\n In fair " + rj[1] + ", where we lay our scene,\n From ancient " + rj[2] + " break to new mutiny,\n Where civil blood makes civil hands unclean.\n From forth the fatal loins of these two foes\n A pair of star-cross`d " + rj[3] + " take their life;\n Whole misadventured piteous overthrows\n Do with their " + rj[4] + " bury their parents` strife.\n The fearful passage of their " + rj[5] + " love,\n And the continuance of their parents` rage,\n Which, but their children`s end, nought could " + rj[6] + ", Is now the " + rj[7] + " hours` traffic of our stage;\n The which if you with " + rj[8] + rj[9] + " attend,\n What here shall " + rj[10] + ", our toil shall strive to mend.");
    });


}());
