<script>
	import '$lib/styles.css';
	import { Calendar, Button, Willow } from '@svar-ui/svelte-core';
	let { data } = $props();
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
		<Calendar buttons={['clear', 'today']} />
	</Willow>
</div>

<!-- Exercises Section -->
<div class="exercises-section">
	<h2>Ćwiczenia</h2>

	<!-- Add Exercise Form -->
	<form method="POST" action="?/add">
		<label for="name">Nazwa ćwiczenia:</label>
		<input type="text" id="name" name="name" required />

		<label for="sets">Serie:</label>
		<input type="number" id="sets" name="sets" required />

		<label for="reps">Powtórzenia:</label>
		<input type="number" id="reps" name="reps" required />

		<label for="weight">Waga:</label>
		<input type="number" id="weight" name="weight" />

		<button type="submit">Dodaj ćwiczenie</button>
	</form>

	<!-- List of Exercises -->
	<ul>
		{#each data.exercises as exercise}
			<li>
				{exercise.name} - Serie: {exercise.sets}, Powtórzenia: {exercise.reps}
				<form method="POST" action="?/delete" style="display: inline;">
					<input type="hidden" name="id" value={exercise.id} />
					<button type="submit">Usuń</button>
				</form>
			</li>
		{/each}
	</ul>
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

	.exercises-section {
		margin: 50px 0;
		padding: 20px;
		background-color: #999999;
		border-radius: 10px;
	}

	.exercises-section h2 {
		color: #333;
	}

	.exercises-section form {
		margin-bottom: 20px;
	}

	.exercises-section label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	.exercises-section input {
		margin-bottom: 10px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		max-width: 300px;
	}

	.exercises-section button {
		padding: 8px 16px;
		background-color: #37a9ef;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.exercises-section button:hover {
		background-color: #2e8bc0;
	}

	.exercises-section ul {
		list-style-type: none;
		padding: 0;
	}

	.exercises-section li {
		background-color: #999999;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
