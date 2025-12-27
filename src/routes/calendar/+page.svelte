<script>
	import '$lib/styles.css';
	import { Calendar, Button } from '@svar-ui/svelte-core';
</script>

<div id="header">
	<h1>Fitolongo - Calendar</h1>
</div>
<ul>
	<li><a href="/calendar">Calendar</a></li>
	<li><a href="/statistics">Statistics</a></li>
	<li><a href="/Notes">Notes</a></li>
</ul>
<div class="training-calendar">
	<Calendar />
</div>

<style>
	.training-calendar {
		justify-items: center;
		margin: 2rem;
		background-color: #d9d9d9;
		width: 95%;
		font-size: larger;
	}
</style>
