<nav class="sticky top-0 left-0 w-full z-50 bg-white">
    <div class="block lg:flex items-center justify-between">
        <div class="flex justify-between">
            <x-ui.logo class="backToTop cursor-pointer w-[150px] h-[46px] lg:w-[180px] lg:h-[55px]" />
            <div>
                 <x-ui.hamburger id="hamburgerbutton" class="h-8 w-8 lg:hidden cursor-pointer hover:text-primary-400" />
                 <x-ui.close id="closebutton" class="h-8 w-8 hidden lg:hidden cursor-pointer hover:text-primary-400" />
            </div>
        </div>
        <ul id="menu" class="hidden p-4 lg:p-0 bg-primary-100 lg:bg-inherit lg:flex lg:space-x-4 mt-8 lg:mt-0">
            <li><a href="#aboutUsSection" class="learnAboutUs">About</a></li>
            <li><a href="#ourWorkSection" class="seeOurWork">Our Work</a></li>
            <li><a href="#contactUsSection" class="contactUs">Contact Us</a></li>
        </ul>
    </div>
</nav>
