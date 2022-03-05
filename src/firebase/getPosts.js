import { setPosts } from "../actions/setPosts";
import { db } from "./firebase-config";

const getPosts = async (prop) => {
    const dbFirebase = []
    const response = await db.collection('linkedin-posts').orderBy('timestamp', 'desc').get();
    response.docs.forEach(doc => {
        dbFirebase.push(
            {
                id: doc.ref.id,
                data: doc.data()
            }
        )
    })
    prop(setPosts(dbFirebase));
}

export default getPosts;