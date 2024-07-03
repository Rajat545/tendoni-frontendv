const Testimonial = () => {
    return (
        <section  className="">
            <div  className="container mx-auto w-full px-6 py-10 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div  className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                <h2  className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Read trusted reviews from our customers
                </h2>

                <div  className="mt-8 flex gap-4 lg:mt-0">
                    <button
                    aria-label="Previous slide"
                    id="keen-slider-previous"
                     className="rounded-full border border-accentColor p-3 text-accentColor transition hover:bg-accentColor hover:text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                         className="h-5 w-5 rtl:rotate-180"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    </button>

                    <button
                    aria-label="Next slide"
                    id="keen-slider-next"
                     className="rounded-full border border-accentColor p-3 text-accentColor transition hover:bg-accentColor hover:text-white"
                    >
                    <svg
                         className="h-5 w-5 rtl:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M9 5l7 7-7 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        />
                    </svg>
                    </button>
                </div>
                </div>

                <div  className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
                <div id="keen-slider"  className="keen-slider">
                    <div  className="keen-slider__slide">
                    <blockquote
                         className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                        >
                        <div>
                        <div  className="mt-4">
                            <p  className="text-2xl font-bold text-accentColor sm:text-3xl">Stayin&apos; Alive</p>

                            <p  className="mt-4 leading-relaxed text-gray-700">
                                No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                                You know what? If we come across somebody with no arms or legs, do we bother
                                resuscitating them? I mean, what quality of life do we have there?
                            </p>
                        </div>
                        </div>

                        <footer  className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Michael Scott
                        </footer>
                    </blockquote>
                    </div>

                    <div  className="keen-slider__slide">
                    <blockquote
                         className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                        <div>
                        <div  className="mt-4">
                            <p  className="text-2xl font-bold text-accentColor sm:text-3xl">Stayin&apos; Alive</p>

                            <p  className="mt-4 leading-relaxed text-gray-700">
                            No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                            You know what? If we come across somebody with no arms or legs, do we bother
                            resuscitating them? I mean, what quality of life do we have there?
                            </p>
                        </div>
                        </div>

                        <footer  className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Michael Scott
                        </footer>
                    </blockquote>
                    </div>

                    <div  className="keen-slider__slide">
                    <blockquote
                         className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                        <div>
                        <div  className="mt-4">
                            <p  className="text-2xl font-bold text-accentColor sm:text-3xl">Stayin&apos; Alive</p>

                            <p  className="mt-4 leading-relaxed text-gray-700">
                            No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                            You know what? If we come across somebody with no arms or legs, do we bother
                            resuscitating them? I mean, what quality of life do we have there?
                            </p>
                        </div>
                        </div>

                        <footer  className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Michael Scott
                        </footer>
                    </blockquote>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonial;

