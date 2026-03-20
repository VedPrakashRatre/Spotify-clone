import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const folder = req.query.folder;
    const dirPath = path.join(process.cwd(), "public", folder);
    
    const files = fs.readdirSync(dirPath);
    res.status(200).json({ files });
}
