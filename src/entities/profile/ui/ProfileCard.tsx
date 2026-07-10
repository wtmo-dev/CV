import {Profile} from "../model/profile";

interface Props{
    profile:Profile;
}

export default function ProfileCard({
    profile
}:Props){
    return (
        <div>
            <h1 className="text-4xl font-bold">
            {profile.name}
            </h1>
            <h2 className="text-xl">
            {profile.role}
            </h2>
            <p>
            {profile.description}
            </p>
        </div>
    )
}