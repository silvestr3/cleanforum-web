<script>
	import QuestionAnsweredIcon from '../../../home/components/QuestionAnsweredIcon.svelte';
	export let question;
</script>

<div class="avatar-container">
	<img src="https://github.com/silvestr3.png" alt="" />
</div>
<article class="dialog">
	<span class="secondary">{question.author}</span>
	<span class="tertiary">{question.createdAt}</span>

	<div class="question-title">
		<QuestionAnsweredIcon isQuestionAnswered={question.bestAnswer} />
		<h2>{question.title}</h2>
	</div>

	<div class="question-content">
		<span>{question.content}</span>
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
			margin-top: 2rem;

			& span {
				display: inline-block;
				margin-block: 1.75rem;
			}
		}
	}
</style>
