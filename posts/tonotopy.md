# Tonotopy

In many sensory regions of the brain, neurons that respond to similar features in their receptive fields are often arranged in close proximity to one another. A well-known example of this feature-to-place mapping is retinotopy in the visual cortex.
Our focus is on a similar organizational principle in the auditory system, specifically tonotopy. This refers to the systematic arrangement of neurons in the auditory cortex and other parts of the auditory pathway that are most responsive to specific sound frequencies.

# Making an optimal stimulus
## Intensity Problem
Sound is a longitudinal wave characterized by intensity (power per unit area). However, it's important to note that pure tones of different frequencies are not perceived with equal loudness, even at the same intensity. Additionally, the threshold for detecting different frequencies varies.
Previous fMRI studies investigating tonotopy in the human auditory cortex have employed various methods to address these perceptual differences. Some researchers attempted to equalize the perceived loudness of different frequencies, while others ensured that all tones were above the detection threshold.
In studies using Equal Loudness Contours (ELC), researchers either conducted manual measurements in the lab or relied on standardized curves like ISO 226:2003. The A-weighting curve, which is based on the ~40 phon curve of the ISO ELC, is commonly used to estimate perceived loudness when measuring noise with instruments.
We  will examine nine key papers published between 2003 and 2022 that explore tonotopy in the human auditory cortex. Additional papers may be included as the research progresses.


![Image description](The_Music_Lesson.jpg "The Music Lesson")
### Studies on Tonotopy in Human Auditory Cortex: Sound Intensity Approaches

1. Formisano et al. (2003): No frequency-specific weighting; Fixed 70dB SPL
2. Talavage et al. (2004): Manual threshold detection, +35/40 dB above threshold
3. Amit et al. (2011): No weighting; 86-89 dB
4. Da Costa et al. (2011): Equal Loudness Contour (ELC) adjusted; ISO226 65 phon
5. Barton et al. (2012): A-weighted; 65 dB (uncertainty noted)
6. Li Su et al. (2014): Fixed 65 dB (Used words, potentially less relevant for tonotopy studies)
7. De Martino et al. (2015): No weighting, 60 dB
8. Allen et al. (2021): Manual ELC + 25-30 dB
9. Falet et al. (2022): A-weighted

Key Considerations in Experimental Design:

1. Audibility: Ensuring participants can hear all frequencies of interest.
2. Activity Spread: Examining how neural activity changes at higher intensities.
3. Amplitude Tonotopy (Amplitopicity): Investigating the relationship between sound amplitude and neural responses.

Reflections on Study Analysis:

It's important to approach the critique of these studies with caution, considering:

1. The complexity of fMRI design in noisy environments.
2. Potential limitations in my understanding of the methodologies employed.

These factors may influence my interpretation and critique of the studies.

## Fixed Intensity Studies

Formisano 2003, Amit 2011 and De Martino 2015 had fixed intensity for all frequencies at approximately 70, 87 and 60 dB respectively. All the above were fMRI studies and didn't have very high frequencies (max was 6.4 kHz). All frequencies will be heard at different loudness but high intensities ensure that all the frequencies might be heard by the participants, but high intensity might also lead to problems like activity spread that will be discussed more below.

## ISO ELC and A-weighted Studies

Da Costa 2011, Barton 2012 and Falet 2022 used ELC or A weighting in an attempt to equalize the perceived loudness. I have difficulty in fully understanding some aspects of these studies.

- Da Costa
    - Authors used ISO 226 for ELC adjusted loudness at 65dB SPL
    - The authors reported approximately 24 dB attenuation by earplugs used to muffle the scanner noise.
    - If the attempt was to equalize loudness, this might not have occurred, since now the perceived loudness will differ
        - **Problem 1 - Rate of growth of loudness is different for different frequencies. Low frequencies are overamplified at higher intensities. Qualitatively, graph looks flatter at higher intensity**
        - Now attenuation might affect lower intensities more, now I have doubts on whether the lowest intensity used 88Hz might be audible without strain
- Barton
    - A weighted 65 dB SPL
- Falet
    - MEG study
    - A weighted
    - The authors mentioned using a sound level meter for calibrating each sound. Would have been nice to know the meter reading to which all frequency tone bursts were standardized to
    - **Problem 2 - Significant attenuation in headphones after 7kHz were reported in the method section (page 2, section 2.2.1 1st paragraph). But I could see higher frequency in the results like Figure 4A. Might be also due to my lack of understanding**

## Manual scaling

Talavage 2004 and Allen 2022 used manual threshold detection and ELC respectively. Unfortunately they both needed to add 35/40 dB to measured curves. Same as Problem 1 discussed above.

- Talavage
    - Used threshold so should be less affected by Activation spread and low frequency bias.

If there is an intensity-encoding neuronal cluster that in part resembles the tonotopic distribution of frequency-encoding neurons as observed by Bilecen D 2002, where they used cross correlation with human fMRI BOLD and SPL levels and found a 2D drift in locus of activation ventral to dorsal and lateral to medial cortex in temporal plane with increasing sound levels, then I shouldn't use a threshold detection, since I might necessarily equalize the perceived loudness with using threshold level volume for each frequency tone.

But this might be less of a problem, since there are no recent papers as per my knowledge that replicated these results, more importantly Tanji 2010. When they did fMRI in monkeys, they couldn't find evidence of amplitopicity. This paper also has additional results that are of interest to me.

Main Result - Increasing intensity led to spread of activation that is recruitment of belt areas (could this be a reason for observation of additional tonotopic gradients observed in some of the studies?).

Main tonotopic boundaries (which is?) were observed in all intensities.

Observed Negative Bold Response (NBR, when response is lower than the baseline period) that was frequency and intensity specific.

- Interestingly, some areas that showed positive BOLD response (PBR) to high tones show NBR to low tones
    - They propose suppression or deactivation of cortical regions not required for performance
    - Much smaller than PBR
    - Authors suggested lateral inhibition; neurons' response to a stimulus inhibited by excitation of neighbouring neurons
- They also noted two types of interactions in Intensity level and AC organization
    - Monotonic spread of activation with increase in intensity
        - Hart 2003 and Jäncke 1998
            - Hart noted that recruitment is different for high and low frequency
    - Amplitopicity
        - As mentioned above, Tanji didn't observe
        I need to read Brechmann 2002 JNP, will continue…….
