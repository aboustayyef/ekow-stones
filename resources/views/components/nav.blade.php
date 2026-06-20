<nav class="sticky top-0 left-0 w-full z-50 bg-white">
    <div class="block lg:flex items-center justify-between">
        <div class="flex justify-between">
            <a href="#" aria-label="Back to top" class="js-scroll-top block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2">
                <x-ui.logo class="h-[46px] w-[150px] lg:h-[55px] lg:w-[180px]" />
            </a>
            <div>
                 <x-ui.hamburger id="hamburgerbutton" class="h-8 w-8 lg:hidden cursor-pointer hover:text-primary-400" />
                 <x-ui.close id="closebutton" class="h-8 w-8 hidden lg:hidden cursor-pointer hover:text-primary-400" />
            </div>
        </div>
        <ul id="menu" class="hidden p-4 lg:p-0 bg-primary-100 lg:bg-inherit lg:flex lg:space-x-4 mt-8 lg:mt-0">
            <li><a href="#aboutUsSection" class="js-scroll-about">About</a></li>
            <li><a href="#ourWorkSection" class="js-scroll-work">Our Work</a></li>
            <li><a href="#contactUsSection" class="js-scroll-contact">Contact Us</a></li>
        </ul>
    </div>
</nav>
