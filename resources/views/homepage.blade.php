<x-layout>

   <x-slot name="title">
      New Title
   </x-slot>

   <x-slot name="content">
      <section>
         <div class="flex items-center justify-between">
            <x-ui.logo width="180" height="55" />
            <ul id="desktopMenu" class="flex space-x-4">
               <li><a href="#">About</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Contact Us</a></li>
            </ul>
         </div>
      </section>

      <section>
        <div class="text-center text-5xl font-bold">
            <h1 class="text-primary-700">Elevate your Space</h1>
            <h2 class="text-primary-400 mt-2">With Timeless Stone</h2>
        </div>
      </section>

      <section>
        <div>
        <div class="px-0 bg-primary-600 h-[834px] rounded-3xl flex overflow-hidden" style="background-image: url('https://place-hold.it/1200x700'); background-size: cover; background-position: center;">
            <div class="w-[475px] p-12 bg-primary-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias vero incidunt pariatur accusamus saepe aliquam magni porro, repellendus, harum consequuntur. Quis nobis, deleniti dolorum quo odit omnis necessitatibus quas.</div>
        </div>
    </div>
      </section>
   </x-slot>
</x-layout>
