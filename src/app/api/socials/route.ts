import {NextResponse} from 'next/server';
import path from "path";
import fs from "fs";
import yaml from "js-yaml";

export const GET = async (_: Request) => {
    const rawData = fs.readFileSync(path.join(process.cwd(), '_socials.yml'), 'utf-8');
    const yamlData: any = yaml.load(rawData);
    const socials = Object.entries(yamlData.socials).map((social, _) => ({
        name: social[0],
        url: social[1],
    }));

    console.log(socials);

    return NextResponse.json({socials});
}
