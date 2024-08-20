<script>
	import Avatar from '$components/Avatar.svelte';
	import QuestionAnsweredIcon from './QuestionAnsweredIcon.svelte';

	export let question;
</script>

<a href={`/question/${question.slug}`} class="question-item">
	<Avatar />
	<div class="question-info">
		<h3>
			<QuestionAnsweredIcon isQuestionAnswered={question.bestAnswer} />
			{question.title}
		</h3>
		<span class="secondary">
			{question.authorName}
			<time class="tertiary">{question.createdAt}</time></span
		>
	</div>
</a>

<style>
	a.question-item {
		width: 100%;
		height: 5rem;
		background-color: var(--bg-secondary);
		border-radius: 0.3rem;
		position: relative;
		padding: 1rem;
		transition: background-color 200ms linear;
		display: flex;
		align-items: center;
		gap: 1rem;

		&:hover {
			background-color: var(--bg-tertiary);
		}

		&::before {
			content: '';
			position: absolute;
			background-color: var(--action-primary);
			width: 3px;
			height: 100%;
			left: 0;
			top: 0;
			border-radius: inherit;
			transform: scaleY(0);
			transform-origin: bottom;
			transition: transform 300ms;
		}

		&:hover::before {
			transform: scaleY(1);
			transform-origin: top;
		}

		& .question-info {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			& h3 {
				font: 700 1rem/1.19 var(--ff-text);
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}

			& span time {
				margin-left: 0.5rem;
			}
		}
	}
</style>
