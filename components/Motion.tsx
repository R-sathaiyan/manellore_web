"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
export function Reveal({children,className="",delay=0,...props}:{children:React.ReactNode;className?:string;delay?:number}&HTMLMotionProps<"div">){return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}} {...props}>{children}</motion.div>}
export const fadeUp={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.2},transition:{duration:.6,ease:[.22,1,.36,1]}};
