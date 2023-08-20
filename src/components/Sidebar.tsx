import { useWindowDimensions } from "../hooks/useWindowDimensions"

type Props = {}

const Sidebar = (props: Props) => {
  const { width, height } = useWindowDimensions()

  return (
    <>
      <div>{width}</div>
      <div>{height}</div>
    </>
  )
}

export default Sidebar