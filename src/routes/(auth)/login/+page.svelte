<div class="container">
	<form method="POST" class="box">
		<h1 class="title">Clean Forum</h1>

		<div class="input-wrapper">
			<input name="email" type="text" placeholder="Email" />
			<input name="password" type="password" placeholder="Password" />
		</div>
		<button type="submit">Login</button>
		<a href="/register">Register</a>
	</form>
</div>

<style>
	.container {
		height: 100vh;
		display: flex;
		align-items: center;
	}

	.box {
		background-color: var(--bg-secondary);
		margin-inline: auto;
		width: 400px;
		height: fit-content;
		border-radius: 1rem;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;

		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 2rem;

		& .input-wrapper {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			margin-top: 4rem;
			margin-bottom: 4rem;

			& input {
				background-color: var(--bg-tertiary);
				height: 2.5rem;
				padding-inline: 1rem;
				border-radius: 8px;

				&::placeholder {
					color: var(--text-tertiary);
				}
			}
		}

		& button {
			background-color: var(--action-primary);
			padding: 0.5rem 2rem;
			border-radius: 8px;
			cursor: pointer;
			margin-bottom: 1rem;
			width: 50%;
			text-align: center;

			&:hover {
				background-color: var(--action-secondary);
			}
		}

		& a {
			color: var(--text-secondary);

			&:hover {
				color: var(--text-primary);
			}
		}
	}
</style>
