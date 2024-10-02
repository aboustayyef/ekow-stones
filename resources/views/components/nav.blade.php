<nav>
   <div class="block text-right lg:flex items-center justify-between">
      <div class="flex justify-between">
         <x-ui.logo width="180" height="55" />
         <div>
             <x-ui.hamburger id="hamburgerbutton" class="h-8 w-8 lg:hidden cursor-pointer hover:text-primary-400" />
             <x-ui.close id="closebutton" class="h-8 w-8 hidden lg:hidden cursor-pointer hover:text-primary-400" />
         </div>
      </div>
      <ul id="menu" class="hidden lg:flex lg:space-x-4 mt-8 lg:mt-0">
         <li><a href="#">About</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">Contact Us</a></li>
      </ul>

   </div>
</nav>
