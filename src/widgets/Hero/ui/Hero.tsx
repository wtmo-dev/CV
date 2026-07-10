import ProfileCard from "@/entities/profile/ui/ProfileCard";
import { heroProfile } from "@/entities/profile/model/data";

export function Hero() {
    return (
        <section>
            <ProfileCard profile={heroProfile} />
        </section>
    );
}