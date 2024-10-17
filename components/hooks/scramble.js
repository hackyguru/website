import { useScramble } from "use-scramble";

export default function Scramble(props) {
    const { ref, replay } = useScramble({
        text: props.text,
        range: [65,125],
        speed: 0.7,
        tick: 6,
        step: 7,
        scramble: 46,
        seed: 1,
        chance: 1,
        overdrive: false,
        overflow: false,
      })


      
  // apply the ref to a node
  return <p ref={ref}   onMouseOver={replay} 

 />
}

