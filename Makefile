install:
		npm ci
brain-gcd:
		node bin/brain-gcd.js
brain-prime:
		node bin/brain-prime.js
brain-progression:
		node bin/brain-progression.js
brain-games:
		node bin/brain-games.js
brain-even:
		node bin/brain-even.js
brain-calc:
		node bin/brain-calc.js
publish:
		npm publish --dry-run
lint:
		npx eslint .
fix:
		npx eslint . --fix
git:
		git add .
		git commit -m 'finished current step'
		git push