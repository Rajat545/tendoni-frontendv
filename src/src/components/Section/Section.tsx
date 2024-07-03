type Props = {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  background?: string;
  textColor?: string;
  backgroundImage?: string;
  filter?:string
};
const Section = ({
  children,
  id,
  title,
  subtitle,
  background,
  textColor,
  backgroundImage,
  filter
}: Props) => {
	return (
		<section
		id={id}
		className={`w-full py-6 md:py-8 lg:py-10 xl:py-12 ${
			background ? background : "bg-inherit "
		}`}
			>
      		<div className="w-full">
        		<div className="flex flex-col w-full space-y-4">
					<div className="flex flex-col w-full items-center justify-center container mx-auto px-6">
						<h1 className="w-full text-center font-merriweather text-accentColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
						{title}
						</h1>
						{subtitle ? (
						<h2
							className={`lg:mt-3 w-full text-center font-poppins text-base md:text-lg lg:text-xl xl:text-2xl font-extralight tracking-tight ${
							background ? textColor : "text-gray-900 "
							}`}
						>
							{subtitle}
						</h2>
						) : null}
					</div>
					<div className={`w-full h-auto bg-cover bg-center object-cover bg-no-repeat ${backgroundImage} `}>
						<div style={{backdropFilter:filter||"none"}}>
						<div className="container flex flex-col mx-auto px-4 md:px-6 items-center justify-center">
						{children}
						</div>
						</div>
					</div>
				</div>
      		</div>
    	</section>
  	);
};

export default Section;
