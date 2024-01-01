import { connectDB , disconnectDB, database} from '../lib/mongodb';

export async function GET() {
    try {
        const client = await connectDB();
        const collection = database.collection('AllData');
        const posts = (await collection.find({}).toArray()).at(0);
        if(posts == undefined){
            throw new Error("No data fetched from database");
        }
        const mapping : any = {
            "NavbarData" : "1-nb",
            "WelcomePageData" : "2-wp",
            "AboutData" : "3-ab",
            "WorkData" : "4-wk",
            "ProjectData" : "5-pj",
            "FooterData" : "6-ft",
            "AccountLinksData" : "7-al",
            "GlobalData" : "8-gl"
        }
        let data : any = {};
        for(let key in mapping){
            data[key] =  posts ? posts[mapping[key]] : undefined;
            if(data[key] == undefined){
                throw new Error("Some fields are missing in data");
            }
        }
        return new Response(JSON.stringify(data), {status : 200, headers: { 'Content-Type': 'application/json' }});

    } catch (error) {
        // console.error(error);
        return new Response(JSON.stringify({error}), {status : 400,  headers: { 'Content-Type': 'application/json' }});
    } finally {
        await disconnectDB();
    }

}