//Load Libraries
const fs = require('fs');
const os = require('os');


//Define the Operating System
class OperatingSystem {
    constructor(name, version, platform) {
        this.name = name;
        this.version = version;
        this.platform = platform;
        this.startup = () => {
            return OS is starting...
        }
    }


//Create File System
    createFileSystem(){
        fs.mkdir('/', (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(File System Created!)
        })
    }


//Create Operating System Processes
    createProcesses(){
        os.cpus().forEach((cpu, index) => {
            console.log(CPU ${index} is initiating...);
        })
    }


//Create Process Manager
    createProcessManager() {
        let processList = [];
        let processManager = {
            addProcess: (processName) => {
                processList.push(processName);
            },
            removeProcess: (processName) => {
                processList = processList.filter((process) => {
                    return process !== processName;
                })
            },
            listProcesses: () => {
                processList.forEach((processName) => {
                    console.log(Process name: ${processName});
                })
            }
        }
        return processManager;
    }


}


//Create an instance of the Operating System
let myOS = new OperatingSystem('MyOS', '1.0', 'x86_64');


// Perform OS startup
console.log(myOS.startup());


// Create File System
myOS.createFileSystem();


// Create Processes
myOS.createProcesses();


//Create Process Manager
let processManager = myOS.createProcessManager();


//Add a process
processManager.addProcess('Process 1');


//Remove a process
processManager.removeProcess('Process 1');


//List all