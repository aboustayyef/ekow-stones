<section class="mt-4" id="ourWorkSection">
    <div class="flex justify-between items-center">
        <div>
            <h2 class="text-3xl lg:text-5xl text-primary-600 font-bold">Our Work</h2>
            <p class="mt-2 text-stone-400 text-xl">Explore a selection of projects we’ve delivered for our clients</p>
        </div>
        <x-ui.back-to-top/>
    </div>
</section>
<section class="py-0 border-b border-gray-400 ">
    <div>
        <p class="text-primary-300 animate-pulse text-right">scroll for more >></p>
        <ul id="ourWork" class="flex space-x-12 overflow-x-auto">
            <li class="selected"><a href="">Countertops</a></li>
            <li><a href="">Kitchens</a></li>
            <li><a href="">Walls</a></li>
            {{-- <li><a href="">Washrooms</a></li> --}}
            <li><a href="">Basins</a></li>
        </ul>
    </div>
</section>
<section>
    <div>
        <div id="image-nav" class="-mt-6 flex space-x-4 justify-start items-center hidden">
            <!-- Placeholder for submenu (1 2 3) -->
        </div>
        <div id="visible-slide" class="mt-4 w-full aspect-video bg-cover bg-center bg-no-repeat bg-primary-50" style="background-image: url('/storage/img/counters-1.jpg');"></div>
    </div>
</section>

