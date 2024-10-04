module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build', // build: Use when changes affect the build system or external dependencies.

                'chore', // chore: Use for maintenance tasks that don't modify src or test files.

                'ci', // ci: Use for changes to CI configuration files and scripts.

                'docs', // docs: Use for documentation only changes.

                'feat', // feat: Use when adding a new feature to your application.

                'fix', // fix: Use when fixing a bug in your codebase.

                'perf', // perf: Use for performance improvements.

                'refactor', // refactor: Use when restructuring code without changing its external behavior.

                'revert', // revert: Use when reverting a previous commit.

                'style', // style:  Use for changes that do not affect code meaning (whitespace, formatting, etc).

                'test', // test: Use when adding or modifying tests.
            ],
        ],
        'subject-case': [2, 'always', 'sentence-case'], // Use sentence-case for subject
    },
};
