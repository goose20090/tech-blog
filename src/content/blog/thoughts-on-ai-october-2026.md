---
title: 'How I stopped worrying and learned to love the bot: thoughts on AI in October 2026'
description: 'A snapshot of where my thinking on AI and coding is right now, so I can look back on it.'
pubDate: '2026-10-24'
draft: true
---

### Why am I writing this?

Anyone who works at tech is probably sick of the topic of AI. I find it both utterly exhausting to think and talk about, but physically can't stop myself thiking or talking about it 😂 I both dread it coming up as a lunch time topic at my work, but also find myself being the one bringing it up!

Recently, I've gone through something of a crisis that I'm sure that many devs have and I thought it worth documenting exactly what I'm thinking, why and what my outlook going forward is exactly.


#### What happened?

Opus 4.6 was released in February 2026 and everybody was extremely impressed at the time. Between then and Opus 5.4 though, it wasn't overwhelmingly clear that this trajectory would continue. Opus 5.4 was unbearably wordy to deal with. Engineers were often constructing elaborate context management systems to stop it from answering basic questions with a paragraph of slop.

I know more than one engineer who felt that 4.6 was strong enough as a model that it was worth using over the 5 series because of this insane wordiness.

In general, while frontier models like Astra and Fable were breaking benchmarks and were obviously fantastic to work with- they seemed frankly too expensive to be used by the £20/month tier, which is what my workplace was paying for.

It felt like things had stagnated and that there were a few things in the future that remained uncertain to me around agentic code:

Models didn't seem to be meaningfully better than they were 6 months ago (at the same price point). You could point me at the benchmarks, but that was my personal feeling- things didn't feel like they'd meaningfully progressed in half a year.

That opened up all kinds of questions to me: was this the upper limit of what this technology could achieve? was the united states literally running out of compute? If things are about as good as they're going to get, what will things look like in 10 years? (IMO still pretty different). 

Opus 5.5 conclusively proved otherwise to me.

#### Opus 5.5

Is just insanely good. It's fast, it's articulate and it's good at coding. It's as strong as Fable in multiple areas, but the thing that really sent a chill down my spine was that it was _40% cheaper than 5.4_.

This completely invalidated many of the (admittedly feeble) counter arguments I'd been able to offer the maximilists at my work (and the maximalist wolf inside me- I remained extremly split on the topic). The last 6 months had felt like a period of incremental improvements. Here was a quantum leap (in my opinion!).

It became clear that what we were experiencing was not the upper limit of these tools, that they would get both better and cheaper over time.

I asked myself a question: what if we were able to have a model as good as Fable as cheap as luna?

I thought that would change the whole industry and I broadly think that one day, that will happen. It was something I'd been fighting and offering counter arguments for for a long time, but this release was the moment that I accepted things.

Then a massive event happened in my own development ecosystem


#### DHH

You can say many critical things about DHH (I have and will to anyone who asks), but he's unmistakably the most important figure in the Rails ecosystem.

Other than being the creator of the goddamn framework, he keynotes every Rails conf, he's the face of the technology without question.

When he comes forward with an opinion, it's impossible not to take notice of it in our community.

When he came out against static typing, we had to take notice. I remember attending Brighton Ruby once and watching the lead dev of Sorbet talk about the potential improvements we could get in ruby-lsp using somethign like a static type-checker, pointing to the DX and autocomplete that TypeScript devs were showing the world. And it felt like she was hanlding the conversation like an egg, whilst wearing oven gloves, with 2 elephants in the room watching (not to mix metaphors), because DHH (creator of Rails) and Matz (creator of ruby) had both come out vehemantly against static typing.

This is just an aspect of being a ruby dev you have to accept- the outsized impact that one man can have in your ecosystem. So I was looking forward to Rails World 2026 to see what he had to say.

#### Rails World

How can I even start: DHH isn't writing Rails any more, the best programming language is now English, people who still type code by hand are losers, we can convert backends to rust now and work with a twelfth of the resources etc. etc. etc.

You've probably seeen this talk, but why did it bum me out so much?

Whatever you say about DHH, before this he was THE GUY for developer happiness. Active Record was made by resisting all urges to follow Java-esque conventions around foreign keys, doing disgusting meta programming under the hood, all to make the best possible API for writing SQL FOR DEVLEOPERS.

He would often talk about the pleasure and the craft of making good software. Less than a year ago, he was saying that, if the market no longer chose to reward him for doing "cool vim combos", he was still going to _do them_. 

To hear this guy no longer identify as a software writer, but as a software maker, was incredibly jarring.

#### The despair

Why was it so depressing to me that how to write software is changing so much?

I think the kind of developer that I was becoming was sadly exactly the kind that LLMs were going to hose.

What got me out of bed in the morning was designing code that was expressive, readable and maintainable. I was mainly on the backend, so my clients and users were basically my colleagues.

The feeling that code quality no longer mattered- that we could just put in the requirements as a markdown file and get the feature out on the other end was pretty existential to me career-wise, because caring about code-quality and being inspired to do so by the amazing leads and seniors on my team, was really the fuel in my particular personal development engine.

So what helped? 2 things: looking what the hardcore maximalists that were delivering productivity results were saying and actually trying to do some more aggressive vibe coding myself.

#### The clarity

What finally chilled me out were 2 things:

1. Actually vibe coding made me realise that the skills I'd built continued to be useful.

I really do believe that the people who will be prompting most effectively in the future, will be devs.

The code my agent put out turned into spaghetti on a large codebase very quickly until I started giving it deterministic feedback and strict domain design.

I knew the tools with which to do this in Ruby (I'd have looked for equivalents in another language) and things massively improved once I gave the agent access to those tools.

What would the product designer with a markdown file been able to recognise the issue and know how to fix it? I doubt it. Even at a high level, the ability to know about how an agent is able to view the code and get immediate, deterministic feedback for anti-patterns is extremely powerful

2. I very rarely came across the opinion that code quality no longer mattered, even among the absolute hardcore of coolade drinkers.

Listening to Matt Pocock and Poteto, the two most popular skill writers in the world, I was surprised to keep coming across this single idea: The most important context for your agent is your codebase.

Their vision of AI development was something along the lines of:

1. Make your codebase follow very strict, extensible conventions

2. Give small tasks to your agents, finetune the results with deterministic tools until you feel that they have demonstrated consistently that they're able to make changes corerctly (deterministic tools often mean linter rules)

3. Allow that trust to expand to other tasks and begin to orchestrate them together.

4. Important, 2 way doors, like auth, financial data, gdpr stuff, should still need human review


This really heartened me because:

1. Codebase design seems to continue to matter more than ever

2. The care that I was taking in my day-to-day work was deemed neceessary even by them, because the domains that they touted as "high risk" seemed to be pretty much my daily work.


#### So what now?

1. I'm going to focus on building my theoretical knowledge of codebase design.

This was important when I was first starting, but picking things up by osmosis isn't enough any more. I have to learn more about how systems interact so that I can make the most of the new paradigms that are coming.

2. I'm going to focus on observability and deterministic benchmarks in the projects that I build. If my agents can't see what they're doing or what effect they're having, they can't judge the results of their work.


This gives me a real erason to get up, learn, progress and get better.


Obviously this is a draft.


