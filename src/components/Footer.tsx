const Footer = () => {
  return (
    <footer className="mt-16  bg-black dark:bg-accentDark/90 flex flex-col items-center text-light dark:text-dark">
      <div className="my-6">
        <h3 className="font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
          A World Tour
        </h3>
      </div>
      <span className="w-full mb-4 border-t border-solid border-light text-center text-white">
        &copy; 2024 Aroundtoure. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
