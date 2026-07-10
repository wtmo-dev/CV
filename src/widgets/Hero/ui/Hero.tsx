import ProfileCard from "@/entities/profile/ui/ProfileCard";
import { heroProfile } from "../model/data";

export function Hero() {
    return (
        <section>
            <ProfileCard profile={heroProfile} />
        </section>
    );
}