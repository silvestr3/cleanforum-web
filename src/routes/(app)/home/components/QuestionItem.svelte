<script>
	import QuestionAnsweredIcon from './QuestionAnsweredIcon.svelte';

	export let question;
</script>

<li class="question-item">
	<div class="img-container">
		<img src="https://github.com/silvestr3.png" alt="Author profile" />
	</div>
	<div class="question-info">
		<h3>
			<QuestionAnsweredIcon isQuestionAnswered={question.bestAnswer} />
			{question.title}
		</h3>
		<span>{question.authorName} <time>{question.createdAt}</time></span>
	</div>
</li>

<style>
	li.question-item {
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

		& .img-container {
			width: 3rem;
			background-color: white;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 2px;

			& img {
				width: 100%;
				aspect-ratio: 1/1;
				border-radius: inherit;
			}
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

			& span {
				font: 500 0.88rem/1 var(--ff-text);
				color: var(--text-secondary);

				& time {
					font: 500 0.75rem/1 var(--ff-text);
					color: var(--text-tertiary);
					margin-left: 0.5rem;
				}
			}
		}
	}
</style>
