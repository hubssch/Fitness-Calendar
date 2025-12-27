<script>
	import '$lib/styles.css';
	import { Calendar, Button, Willow } from '@svar-ui/svelte-core';
</script>

<div id="header">
	<h1>Fitolongo - Calendar</h1>
</div>
<ul>
	<li><a href="/calendar">Calendar</a></li>
	<li><a href="/statistics">Statistics</a></li>
	<li><a href="/Notes">Notes</a></li>
</ul>

<div class="calendar-willow">
	<Willow>
		<Calendar />
	</Willow>
</div>

<style>
	.calendar-willow {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 50px 0;
	}

	:global(.calendar-willow .wx-willow-theme) {
		/* tło */
		--wx-background: #b5b5b5;

		/* rozmiar i odstępy kalendarza */
		--wx-calendar-cell-size: 100px; /* wysokość/szerokość pojedynczej komórki */
		--wx-calendar-padding: 20px; /* padding wokół kalendarza */
		--wx-calendar-gap: 6px; /* odstęp między komórkami */

		/* fonty i kolory w kalendarzu */
		--wx-calendar-font-size: 16px;
		--wx-calendar-font-color: #1b1b1b;
		--wx-calendar-header-font-size: 24px;

		/* border radius dla elementów kalendarza */
		--wx-calendar-border-radius: 10px;

		/* dodatkowe kolory czcionek i wybrane stany */
		--wx-calendar-day-font-color: #5c0d0d;
		--wx-calendar-day-muted-font-color: #757575;
		--wx-calendar-selected-background: var(--wx-color-primary);
		--wx-calendar-selected-font-color: var(--wx-color-primary-font);
	}
</style>
