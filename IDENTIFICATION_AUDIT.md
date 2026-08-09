# Safari Wildlife Guide — Identification Trait Audit

## Identification model
The identification data now uses structured, multi-select traits instead of the old single-value pattern/feature fields.

Categories:
- Animal group
- Size
- Habitat
- Colour
- Markings & pattern
- Distinctive features
- Behaviour / lifestyle

Within a category, multiple observations are treated as alternatives (OR); across categories they are combined (AND/ranked). The UI dynamically hides trait options that do not occur among species still compatible with the other selected observations.

Example:
- Select **Bird** → mammal-only features such as tusks and horns disappear.
- Select **Bird + Wetland** → only bird traits found among the wetland candidates remain visible.
- Select multiple colours or markings → any matching observation contributes to the ranking.

## Size scale
The five labels are deliberately relative field-guide categories:

- Tiny — mouse-sized / tiny frogs / tiny passerines
- Small — small mammals, small birds, small reptiles
- Medium — hare/dove/gamebird-sized through medium antelope/reptiles
- Large — large antelope, eagles, large waders and large reptiles
- Very large — elephant/hippo/giraffe, giant storks/herons/bustards, crocodile/python

The existing 131 records were reviewed and the size assignments were normalised to this scale. In particular, elephant, hippo and eland are now very large; cheetah and wild dog are large rather than medium; and the large raptors/waders are separated from medium birds by their overall field appearance.

## Important implementation detail
The original descriptive fields (`desc`, `clue`, `habitat`, etc.) remain intact for the human-readable guide. The new `identification` object is specifically for the field identification engine.
