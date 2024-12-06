export default function Circle({size, blurSize, top, right, invert=false}: {size: string, blurSize: string, top: string, right: string, invert?: boolean}) {
  const mainCircleStyle = `w-[100%] h-[100%] bg-gradient-to-r rounded-[50%] ${invert ? "from-coda-blue-600 to-coda-blue-100" : "from-coda-blue-100 to-coda-blue-600"}`
  const reflectionStyle = `opacity-80 w-[100%] h-[30%] bg-gradient-to-r rounded-[50%] mt-[-20%] ${invert ? "from-coda-blue-600 to-coda-blue-100" : "from-coda-blue-100 to-coda-blue-600"}`
  return (
    <div className={`absolute`} style={{width: size, height: size, top: top, right: right}}>
      <div className={mainCircleStyle}></div>
      <div className={reflectionStyle} style={{filter: `blur(${blurSize})`}}></div>
    </div>
  )
}
