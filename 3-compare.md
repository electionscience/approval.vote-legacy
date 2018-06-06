---
layout: page
title: Compare
permalink: /compare/
sidenav: compare
subnav:
  - text: What is IRV?
    href: compare/#what-is-instant-runoff-voting
  - text: IRV still has a spoiler effect
    href: 'compare/#irv-still-has-a-spoiler-effect'
  - text: IRV excludes moderates
    href: 'compare/#irv-excludes-moderates'
  - text: IRV is not a Condorcet system
    href: 'compare/#irv-is-not-a-condorcet-system'
  - text: IRV enables tyranny of the majority
    href: 'compare/#irv-forces-control-by-the-majority'
  - text: The 2016 election
    href: 'compare/#the-2016-election'
---

## What is Instant Runoff Voting?

[Instant Runoff Voting on Wikpedia](https://en.wikipedia.org/wiki/Instant-runoff_voting)

In Instant Runoff Voting, voters rank as many candidates as they want in order of choice. It is a form of "Ranked Choice Voting", though there are other ways to tally ranked ballots. Its major proponent in the US is [FairVote.org](https://fairvote.org), and it's used in some cities across the US for mayoral elections. It's better than the widespread "Choose-One Plurality Voting" method, but it has both practical and systemic issues.

## IRV still has a spoiler effect

<p>There's a belief that IRV eliminates the concern that third party candidates act as spoilers. It doesn't.  <a href="http://rangevoting.org/TarrIrvSumm.html" rel="nofollow noreferrer"> Instant Runoff Voting has led to two-party domination in every country it's been adopted in</a>. </p>

<p>It's true that voting honestly for a
  <em>fringe</em> candidate (Yellow) is safe, since they'll be eliminated immediately and your second choice will go to a mainstream candidate (Green). So IRV is better than plurality in this case (where Red would win even though a majority opposes Red):</p>

<p>
  <a href="https://i.stack.imgur.com/3cp8G.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/3cp8G.png" alt="Fringe Yellow candidate does not spoil the election for Green">
  </a>
</p>

<p>However, when the third party candidate becomes more competitive (which is the whole point of adopting an alternative voting
  system), voting honestly for them takes away votes from your second choice, who will get eliminated first, and then your most-disliked candidate will win in the following round. If the third party hadn't run, your more-preferred candidate would
  have won, so the third party is acting as a spoiler, and in fact, the effect is
  <em>worse</em> than in plurality (red bar extends further to the right):</p>

<p>
  <a href="https://i.stack.imgur.com/LbnNY.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/LbnNY.png" alt="Yellow moves closer to Green and splits the vote, allowing Red to win">
  </a>
</p>

<p>Video illustration of this effect: </p>

<p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/JtKAScORevQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</p>

<p>These effects have been modeled graphically on
  <a href="http://zesty.ca/voting/voteline/" rel="nofollow noreferrer">1-dimensional</a> and
  <a href="http://zesty.ca/voting/sim/" rel="nofollow noreferrer">2-dimensional</a>
  <a href="https://en.wikipedia.org/wiki/Political_spectrum#Other_multi-axis_models" rel="nofollow noreferrer">political spaces</a>, and produce bizarre win regions where the population moving
  <em>toward</em> a candidate causes them to lose, and vice versa. In this example, if the population's opinions shifted to the
  right, reducing support for Red and increasing support for Yellow, it would cause Red to win instead of Green!:</p>

<p>
  <a href="https://i.stack.imgur.com/PRqOi.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/PRqOi.png" alt="Yellow is slightly farther from Green, causing the win regions to become non-monotonic">
  </a>
</p>

<p>In 2 dimensions, we can see IRV giving the election to Green even when the population is centered exactly on the Yellow candidate.
  There's also a bizarre Yellow island that's nowhere near the Yellow candidate, and not present in any of the other voting
  systems pictured.</p>

<p>
  <a href="https://i.stack.imgur.com/2F1Dr.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/2F1Dr.png" alt="Hare (IRV) creates non-monotonic win regions in 2D political space">
  </a>
</p>

<p>Approval voting or Condorcet ranking both have results that make sense, with the candidate nearest to the population center
  winning:</p>

<p>
  <a href="https://i.stack.imgur.com/41kny.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/41kny.png" alt="Condorcet or Approval voting produces nearest-neighbor win regions">
  </a>
</p>

<p>Animated 2D comparison of different systems:</p>

<p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/IPMks6afuM8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</p>

## IRV excludes moderates

<p>Similar to above, if there are two more-extreme partisan candidates and a moderate/compromise candidate in the middle, the
  compromise candidate is eliminated early (for not being anyone's first choice), even though they are the best representative of the population as a whole, and a more partisan candidate is elected instead. This is called the "<a href="https://electology.org/center-squeeze-effect"
    rel="nofollow noreferrer">center-squeeze effect</a>".</p>

<p>This is essentially what happened in
  <a href="https://bolson.org/~bolson/2009/20090303_burlington_vt_mayor.html" rel="nofollow noreferrer">Burlington Vermont's 2009 election</a>, which led to
  <a href="https://electology.org/irv-repealed" rel="nofollow noreferrer">IRV being repealed</a>. Montroll was "centrist" relative to the other major candidates, but was eliminated in the 4th round,
  and
  <a href="http://wiki.electorama.com/wiki/2009_Burlington,_Vermont_Mayoral_Election" rel="nofollow noreferrer">a more extreme candidate won</a>, even though Montroll had a higher approval rating than the winner.</p>

<p>Here are the ideal win regions for 14 candidates, with each winning if the population center is nearest to them:</p>

<p>
  <a href="https://i.stack.imgur.com/RBl0Z.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/RBl0Z.png" alt="Voronoi diagram of 14-candidate election">
  </a>
</p>

<p>
  <a href="http://rangevoting.org/IrvExtreme.html" rel="nofollow noreferrer">Here's what happens in IRV</a>. All the candidates near the center are eliminated, and only the more extreme fringe candidates
  can win:</p>

<p>
  <a href="https://i.stack.imgur.com/SicG9.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/SicG9.png" alt="Diagram of win regions of IRV 14-candidate election">
  </a>
</p>

<p>These two effects lead to two-party domination. You can see how IRV skews Australia's House in favor of the two main parties
  even though 1/4 to 1/3 of the population would prefer third parties (while STV leads to a more proportional Senate):</p>

<p>
  <a href="https://i.stack.imgur.com/wLjRl.png" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/wLjRl.png" alt="Bar graph of primary votes vs seats in Australia's House (IRV) and Senate (STV)">
  </a>
</p>

## IRV is not a Condorcet system

<p>In the Burlington election, Montroll was also the
  <a href="https://en.wikipedia.org/wiki/Condorcet_criterion" rel="nofollow noreferrer">Condorcet winner</a>, meaning he would have won against every other candidate in head-to-head elections, but IRV is not
  a Condorcet system, and excluded him. </p>

<p>If your system doesn't elect the most-
  <em>liked</em> candidate (the "Utilitarian Winner"), it should at least elect the most-
  <em>preferred</em> candidate (the "Condorcet Winner"). IRV guarantees neither.</p>

## IRV forces control by the majority

<p>Here's a (contrived) example:</p>

<ul>
  <li>Candidate A is loved by 55% of the population, and hated by 45% of the population (55% overall approval rating)</li>
  <li>Candidate B is liked by everyone (85% overall approval rating)</li>
</ul>

<p>Under IRV, the polarizing Candidate A would win, because they are preferred by a majority, even though the population as
  a whole would be much happier with Candidate B winning the election.</p>

<p>"Utilitarian" voting systems like Score/Approval
  <a href="http://leastevil.blogspot.com/2012/03/tyranny-of-majority-weak-preferences.html"
    rel="nofollow noreferrer">choose the candidate with the higher approval rating, which is considered a better outcome by advocates of these systems</a>.</p>

<p>Another way of viewing this is that Candidate A is a great representative of
  <em>half</em> of the population, while Candidate B is a good representative of the
  <em>entire</em> population.</p>

## The 2016 election

<blockquote>
  <p>And if the Republican primaries had used ranked-choice voting, Trump wouldn't have won the nomination, since a majority
    of the electorate was against him, it's just that the anti-Trump vote was split.</p>
</blockquote>

<p>There's not many good data about this, but it's likely that IRV would still have elected Trump:</p>

<ul>
  <li>
    <a href="http://rangevoting.org/Trump2015.html" rel="nofollow noreferrer">"probably really Trump would have been the IRV victor."</a>
  </li>
  <li>
    <a href="http://riderrants.blogspot.com/2016/11/the-lefts-post-election-whining-about.html" rel="nofollow noreferrer">"it's apparent that under ranked voting, Trump would have won with a majority of the votes"</a>
  </li>
</ul>

<p>Score or Condorcet voting would likely have elected Sanders or Kasich, as they had the highest approval ratings:</p>

<ul>
  <li>
    <a href="https://electology.org/blog/honest-voters-had-preference-2016" rel="nofollow noreferrer">"Sanders turned out to be the most honestly preferred candidate." .. "We might look at Sanders’ win here as being a “true”
      Condorcet winner."</a>
  </li>
  <li>
    <a href="http://rangevoting.org/USA2016retro.html#concl" rel="nofollow noreferrer">"Score Voting (all primary contenders, all parties): Either Sanders or Kasich would have won."</a>
  </li>
  <li>
    <a href="https://halfout.wordpress.com/2016/08/13/voting-needs-to-change-americans-liked-sanders-and-kasich-better-than-clinton-and-trump/"
      rel="nofollow noreferrer">"Notice that even though Democrats voted for Clinton, it was Sanders who really was liked by the most Americans. If we
      didn’t have separate primaries, Sanders could have won."</a>
  </li>
  <li>
    <a href="https://www.reddit.com/r/EndFPTP/comments/4vcq9r/evidence_that_voting_needs_to_change_the_nominees/" rel="nofollow noreferrer">"America really chose Sanders and Kasich."</a>
  </li>
</ul>

<!--
<div>

  <head>
    <meta charset="utf-8">
    <base href="../assets/ballot/play/" />
    <link rel="stylesheet" type="text/css" href="css/model.css">
    <link rel="stylesheet" type="text/css" href="css/election.css">
    <link rel="stylesheet" type="text/css" href="css/sandbox.css">
  </head>

  <body>
    <div id="left"></div>
    <div id="center"></div>
    <div id="right"></div>
  </body>


  <script src="js/helpers.js"></script>
  <script src="js/minpubsub.js"></script>
  <script src="js/Loader.js"></script>
  <script src="js/Mouse.js"></script>
  <script src="js/Draggable.js"></script>
  <script src="js/Model.js"></script>
  <script src="js/Candidate.js"></script>
  <script src="js/Voters.js"></script>
  <script src="js/Election.js"></script>
  <script src="js/Buttons.js"></script>

  <script src="js/main_sandbox.js"></script>
  <script>
    main({
      description: "[type a description for your model here. for example...]\n\nLook, it's the whole shape gang! Steven Square, Tracy Triangle, Henry Hexagon, Percival Pentagon, and last but not least, Bob.",
      features: 4,
      system: "Approval",
      candidates: 4,
      voters: 3
    });
  </script>
</div> -->
