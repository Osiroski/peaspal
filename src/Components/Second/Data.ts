
interface chkponts {
    href:string
    Modaltitle: string;
    title:string;
    summary: string;
    delay: string;
    icon:string;

}
export const Checkpoints: chkponts[] = [
    {
        href:'clientApp',
        Modaltitle:'Client App',
        icon:'bx bx-server',
        title:'Client: React Frontend',
        summary:'The UI is dispalyed by the React Application hosted on Webpack Dev Server tha listens on localhost:3000',
        delay:"100"
    },
    {
        href:'serverApp',
        Modaltitle:'Server App',
        icon:'bx bx-cube-alt',
        title:'Server: Express Frontend',
        summary:'This is the same Express server I built in problem 1. It listens on port tcp:5000',
        delay:"200"
    },
    {
        href:'secureApp',
        Modaltitle:'Secure Comm',
        icon:'bx bx-lock',
        title:'Secure Communication',
        summary:'The frontend server sends and receives proxied HTTP requests/response to the backend server ensuring restricted linkage',
        delay:"300"
    },
    {
        href:'encryptApp',
        Modaltitle:'Encrypt App',
        icon:'bx bx-lock',
        title:'End to End Encryption',
        summary:'This is an external feature enabled by the hosting partner, (Vercel hosting) who guarantee E2E encryption between servers in the environment.',
        delay:"400"
    },
    
   
]