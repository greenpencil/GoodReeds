<?php

namespace ReviewBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Genre
 *
 * @ORM\Table(name="genre")
 * @ORM\Entity(repositoryClass="ReviewBundle\Repository\GenreRepository")
 */
class Genre
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

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
     * One genre has Many child genres.
     * @ORM\OneToMany(targetEntity="Genre", mappedBy="parent")
     */
    private $children;

    /**
     * One genre has a parent genre
     * @ORM\OneToOne(targetEntity="Genre")
     * @ORM\JoinColumn(name="genre_id", referencedColumnName="id")
     */
    private $parent;

    /**
     * Many Books belong to Many Genres
     * @ORM\ManyToMany(targetEntity="Book", mappedBy="genres")
     */
    private $books;

    /**
     * Many Authors belong to Many Genres
     * @ORM\ManyToMany(targetEntity="Author", mappedBy="genres")
     */
    private $authors;

    public function __construct() {
        $this->children = new  \Doctrine\Common\Collections\ArrayCollection();
        $this->books = new  \Doctrine\Common\Collections\ArrayCollection();
        $this->authors = new  \Doctrine\Common\Collections\ArrayCollection();
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
     * Set name
     *
     * @param string $name
     * @return Genre
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Genre
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
     * @return Genre
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
     * Add children
     *
     * @param \ReviewBundle\Entity\Genre $children
     * @return Genre
     */
    public function addChild(\ReviewBundle\Entity\Genre $children)
    {
        $this->children[] = $children;

        return $this;
    }

    /**
     * Remove children
     *
     * @param \ReviewBundle\Entity\Genre $children
     */
    public function removeChild(\ReviewBundle\Entity\Genre $children)
    {
        $this->children->removeElement($children);
    }

    /**
     * Get children
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Set parent
     *
     * @param \ReviewBundle\Entity\Genre $parent
     * @return Genre
     */
    public function setParent(\ReviewBundle\Entity\Genre $parent = null)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return \ReviewBundle\Entity\Genre 
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Add books
     *
     * @param \ReviewBundle\Entity\Book $books
     * @return Genre
     */
    public function addBook(\ReviewBundle\Entity\Book $books)
    {
        $this->books[] = $books;

        return $this;
    }

    /**
     * Remove books
     *
     * @param \ReviewBundle\Entity\Book $books
     */
    public function removeBook(\ReviewBundle\Entity\Book $books)
    {
        $this->books->removeElement($books);
    }

    /**
     * Get books
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getBooks()
    {
        return $this->books;
    }

    /**
     * Add authors
     *
     * @param \ReviewBundle\Entity\Author $authors
     * @return Genre
     */
    public function addAuthor(\ReviewBundle\Entity\Author $authors)
    {
        $this->authors[] = $authors;

        return $this;
    }

    /**
     * Remove authors
     *
     * @param \ReviewBundle\Entity\Author $authors
     */
    public function removeAuthor(\ReviewBundle\Entity\Author $authors)
    {
        $this->authors->removeElement($authors);
    }

    /**
     * Get authors
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getAuthors()
    {
        return $this->authors;
    }
}
