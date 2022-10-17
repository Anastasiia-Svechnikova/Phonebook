import { Outlet } from "react-router-dom";
  import { Suspense } from "react";
import s from "./sharedLayout.module.css"
import { UserMenu } from "components/User-menu";



export const SharedLayout = () => {

    return (
        <>
            <UserMenu/>
            <div className={s.layout}>              
                    <main className={s.main}>
                        <Suspense fallback='Wait a moment....'>
                            <Outlet/>
                        </Suspense>
                    </main>
        </div>
        </>      
    )
}
