import ThemedImage from "@/components/ui/ThemedImage"

export const DatabaseLogo = ({
  width = 600,
  height = 200,
  ...props
}: {
  width?: number
  height?: number
  className?: string
}) => (
  <ThemedImage
    lightSrc="/images/SplitBloomLightLogo.svg"
    darkSrc="/images/SplitBloomDarkLogo.svg"
    alt="Split Bloom Logo"
    width={width}
    height={height}
    {...props}
  />
)
