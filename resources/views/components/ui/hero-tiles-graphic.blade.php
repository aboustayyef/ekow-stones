@php
    $heroTilesGraphic = file_get_contents(resource_path('hero-tiles-graphic.svg'));

    if ($heroTilesGraphic === false) {
        throw new RuntimeException('Unable to load hero tiles graphic SVG.');
    }

    $heroTilesGraphic = preg_replace(
        '/<svg\b/',
        '<svg class="hero-tiles-graphic h-full w-full" preserveAspectRatio="xMidYMid slice" data-hero-tiles-graphic="true"',
        $heroTilesGraphic,
        1,
    );
@endphp

{!! $heroTilesGraphic !!}
