<?php

namespace ReviewBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Book
 *
 * @ORM\Table(name="book")
 * @ORM\Entity(repositoryClass="ReviewBundle\Repository\BookRepository")
 */
class Book
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="blurb", type="text")
     */
    private $blurb;

    /**
     * @var string
     *
     * @ORM\Column(name="ISBN", type="string", length=255, unique=true)
     */
    private $iSBN;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime")
     */
    private $createdAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated_at", type="datetime")
     */
    private $updatedAt;

    /**
     * 1 Book has Many Reviews.
     * @ORM\OneToMany(targetEntity="Review", mappedBy="book")
     */
    private $reviews;

    /**
     * 1 Book has Many Ratings.
     * @ORM\OneToMany(targetEntity="Rating", mappedBy="book")
     */
    private $ratings;

    /**
     * many books have the same author
     * @ORM\ManyToOne(targetEntity="Author", inversedBy="books")
     * @ORM\JoinColumn(name="author_id", referencedColumnName="id")
     */
    private $author;

    /**
     * many books are in the same series
     * @ORM\ManyToOne(targetEntity="Series", inversedBy="books")
     * @ORM\JoinColumn(name="series_id", referencedColumnName="id")
     */
    private $series;

    /**
     * many books share a language
     * @ORM\ManyToOne(targetEntity="Language", inversedBy="books")
     * @ORM\JoinColumn(name="language_id", referencedColumnName="id")
     */
    private $language;

    /**
     * Many Books have Many Images.
     * @ORM\ManyToMany(targetEntity="Image", inversedBy="books")
     * @ORM\JoinTable(name="books_images")
     */
    private $images;

    /**
     * Many Books have Many Genres.
     * @ORM\ManyToMany(targetEntity="Genre", inversedBy="books")
     * @ORM\JoinTable(name="books_genres")
     */
    private $genres;

    public function __construct() {
        $this->reviews = new  \Doctrine\Common\Collections\ArrayCollection();
        $this->ratings = new  \Doctrine\Common\Collections\ArrayCollection();
        $this->images = new  \Doctrine\Common\Collections\ArrayCollection();
        $this->genres = new  \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Set blurb
     *
     * @param string $blurb
     * @return Book
     */
    public function setBlurb($blurb)
    {
        $this->blurb = $blurb;

        return $this;
    }

    /**
     * Get blurb
     *
     * @return string 
     */
    public function getBlurb()
    {
        return $this->blurb;
    }

    /**
     * Set iSBN
     *
     * @param string $iSBN
     * @return Book
     */
    public function setISBN($iSBN)
    {
        $this->iSBN = $iSBN;

        return $this;
    }

    /**
     * Get iSBN
     *
     * @return string 
     */
    public function getISBN()
    {
        return $this->iSBN;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Book
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return Book
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Add reviews
     *
     * @param \ReviewBundle\Entity\Review $reviews
     * @return Book
     */
    public function addReview(\ReviewBundle\Entity\Review $reviews)
    {
        $this->reviews[] = $reviews;

        return $this;
    }

    /**
     * Remove reviews
     *
     * @param \ReviewBundle\Entity\Review $reviews
     */
    public function removeReview(\ReviewBundle\Entity\Review $reviews)
    {
        $this->reviews->removeElement($reviews);
    }

    /**
     * Get reviews
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getReviews()
    {
        return $this->reviews;
    }

    /**
     * Add ratings
     *
     * @param \ReviewBundle\Entity\Rating $ratings
     * @return Book
     */
    public function addRating(\ReviewBundle\Entity\Rating $ratings)
    {
        $this->ratings[] = $ratings;

        return $this;
    }

    /**
     * Remove ratings
     *
     * @param \ReviewBundle\Entity\Rating $ratings
     */
    public function removeRating(\ReviewBundle\Entity\Rating $ratings)
    {
        $this->ratings->removeElement($ratings);
    }

    /**
     * Get ratings
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getRatings()
    {
        return $this->ratings;
    }

    /**
     * Set author
     *
     * @param \ReviewBundle\Entity\Author $author
     * @return Book
     */
    public function setAuthor(\ReviewBundle\Entity\Author $author = null)
    {
        $this->author = $author;

        return $this;
    }

    /**
     * Get author
     *
     * @return \ReviewBundle\Entity\Author 
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Set series
     *
     * @param \ReviewBundle\Entity\Series $series
     * @return Book
     */
    public function setSeries(\ReviewBundle\Entity\Series $series = null)
    {
        $this->series = $series;

        return $this;
    }

    /**
     * Get series
     *
     * @return \ReviewBundle\Entity\Series 
     */
    public function getSeries()
    {
        return $this->series;
    }

    /**
     * Set language
     *
     * @param \ReviewBundle\Entity\Language $language
     * @return Book
     */
    public function setLanguage(\ReviewBundle\Entity\Language $language = null)
    {
        $this->language = $language;

        return $this;
    }

    /**
     * Get language
     *
     * @return \ReviewBundle\Entity\Language 
     */
    public function getLanguage()
    {
        return $this->language;
    }

    /**
     * Add images
     *
     * @param \ReviewBundle\Entity\Image $images
     * @return Book
     */
    public function addImage(\ReviewBundle\Entity\Image $images)
    {
        $this->images[] = $images;

        return $this;
    }

    /**
     * Remove images
     *
     * @param \ReviewBundle\Entity\Image $images
     */
    public function removeImage(\ReviewBundle\Entity\Image $images)
    {
        $this->images->removeElement($images);
    }

    /**
     * Get images
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * Add genres
     *
     * @param \ReviewBundle\Entity\Genre $genres
     * @return Book
     */
    public function addGenre(\ReviewBundle\Entity\Genre $genres)
    {
        $this->genres[] = $genres;

        return $this;
    }

    /**
     * Remove genres
     *
     * @param \ReviewBundle\Entity\Genre $genres
     */
    public function removeGenre(\ReviewBundle\Entity\Genre $genres)
    {
        $this->genres->removeElement($genres);
    }

    /**
     * Get genres
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getGenres()
    {
        return $this->genres;
    }
}
