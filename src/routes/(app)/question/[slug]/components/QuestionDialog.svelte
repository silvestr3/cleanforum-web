<script>
	import Avatar from '$components/Avatar.svelte';
	import QuestionAnsweredIcon from '../../../home/components/QuestionAnsweredIcon.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let question;

	let questionContent = question.content.replace(/<br>/g, '\n\n');
</script>

<Avatar />
<article class="dialog">
	<span class="secondary">{question.author}</span>
	<span class="tertiary">{question.createdAt}</span>

	<div class="question-title">
		<QuestionAnsweredIcon isQuestionAnswered={question.bestAnswer} />
		<h2>{question.title}</h2>
	</div>

	<div class="question-content">
		<SvelteMarkdown source={questionContent} />
	</div>

	<div class="action-buttons">
		<button class="comment">Comment</button>
		<button class="answer">Answer</button>
	</div>
</article>

<style>
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		& div.question-title {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-top: 1rem;
		}

		& div.question-content {
			border-block: solid 1px rgba(115, 115, 128, 0.3);
			padding-block: 1.75rem;
			margin-top: 2rem;
		}

		& .action-buttons {
			display: flex;
			align-items: center;
			justify-content: end;
			gap: 0.5rem;
			margin-top: 1rem;

			& button {
				text-transform: uppercase;
				font-size: smaller;
				padding: 0.5rem 1rem;
				border-radius: 8px;
				cursor: pointer;

				&.answer {
					background-color: var(--action-primary);

					&:hover {
						background-color: var(--action-secondary);
					}
				}

				&.comment {
					background-color: var(--bg-primary);

					&:hover {
						background-color: var(--bg-tertiary);
					}
				}
			}
		}
	}
</style>
